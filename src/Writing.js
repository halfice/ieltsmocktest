import React from 'react';
import 'react-dom';
import './App.css';
import Countdown from 'react-countdown-now';
import { Form, TextArea } from 'semantic-ui-react'
export class Writing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            TimeTogo: this.props.TimeTogo,
            WordCount: 0,
            placeholders:this.props.placeholder,

        };
    }

    handleChange() {
        var tmp=this.state.WordCount+1;
        this.setState({
            WordCount: tmp,
        });
    }
    render() {
        console.log(this.props.TimeTogo);
        const Completionist = () => <span>You are good to go!</span>;
        return (
            <div><h2>Writing Task 1 - General Test IELTS</h2>
                <h3>Time Left:<Countdown date={Date.now() + parseInt(this.state.TimeTogo)} >
                    <Completionist />

                </Countdown></h3>
                <br></br>
                <TextArea onChange={this.handleChange.bind(this)} className="paddingtextbox" rows={10} placeholder={this.state.placeholders} />
                <div>

                </div>
                <h3>Total Word : {this.state.WordCount}</h3>
                <br/>
                <h3>TIPS</h3>
                <div>
                    
                    <ul>
                        <li>Formal - > Dear Sir / Madam , End with Your faithfully</li>
                        <li>Semi Formal  - > Dear Mr Brown  , End with      Yours Sincerely</li>
                        <li>Informal Letter - > Dear John  - > Best Wishes  Warmwishes</li>
                    </ul>
                    </div>>
            </div>
        );
    }
};


