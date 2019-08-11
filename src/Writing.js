import React from 'react';
import 'react-dom';
import './App.css';
import { Form, TextArea } from 'semantic-ui-react'
export class Writing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            WordCount: 0,
            placeholders: this.props.placeholder,
            seccount: 60,
            minutes: this.props.minutess,
            TimerisOne: true,
            intervalid: 0,



        };
    }

    componentDidMount() {
        this.setState({ MinutesString: this.props.minutess, SecondSring: "00" });
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        var tmpcounter = this.state.seccount;
        var tmpmincounter = this.state.minutes;
        tmpcounter = tmpcounter - 1;
        if (tmpcounter < 0) {
            tmpcounter = 60;
            tmpmincounter = tmpmincounter - 1;
        }
        var tmpeTimerIson = true;
        if (tmpmincounter <= 0) {
            tmpeTimerIson = false;
            console.log(this.interval);

            clearInterval(this.intervalId);
        }

        this.setState({
            MinutesString: tmpmincounter,
            SecondSring: tmpcounter,
            seccount: tmpcounter,
            minutes: tmpmincounter,
            TimerisOne: tmpeTimerIson,
        });

    }
    componentWillUnmount() {
        console.log(this.interval);

        clearInterval(this.intervalId);
    }


    handleChange() {
        var tmp = this.state.WordCount + 1;
        this.setState({
            WordCount: tmp,
        });
    }
    render() {
        return (
            <div>



                {this.state.TimerisOne == true &&
                    <div>
                        <h2>Writing Task 1 - General Test IELTS</h2>
                        <h3>Time Left:   {this.state.MinutesString}: {this.state.SecondSring}</h3>
                        <br></br>
                        <TextArea onChange={this.handleChange.bind(this)} className="paddingtextbox" rows={10} placeholder={this.state.placeholders} />
                    </div>
                }

                <div>
                    <h3>Total Word : {this.state.WordCount}</h3>
                </div>
                <br />
                <h3>TIPS</h3>
                <div>
                    <ul>
                        <li>Formal - > Dear Sir / Madam , End with Your faithfully</li>
                        <li>Semi Formal  - > Dear Mr Brown  , End with      Yours Sincerely</li>
                        <li>Informal Letter - > Dear John  - > Best Wishes  Warmwishes</li>
                    </ul>
                </div>

            </div>
        );
    }
};


