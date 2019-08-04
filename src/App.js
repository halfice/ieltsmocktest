import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Writing } from './Writing';
import listenning from './listenning.png'
import reading from './reading.png'
import writing from './writing.png'
import writing2 from './writing2.png'
import home from './home.png'
export class App extends React.Component {
  //function App() {
  constructor(props) {
    super(props);
    this.state = {
      TimeTogo: this.props.TimeTogo,
      WordCount: 0,
      WritingTask1: false,
      WritingTask2: false,
      listenning: false,
      reading: false,
      Home:true,



    };
  }

  changelitens() {
    this.setState({
      listenning: true,
      reading: false,
      WritingTask1:false,
      WritingTask2:false,
      Home:false,

    });
  }

  changereading() {
    this.setState({
      reading: true,
      listenning: false,
      WritingTask1:false,
      WritingTask2:false,
      Home:false,
    });
  }

  changewriting() {
    this.setState({
      WritingTask1: true,
      listenning: false,
      reading: false,
      WritingTask2:false,
      Home:false,
    });
  }

  changewriting2() {
    this.setState({
      WritingTask2: true,
      listenning: false,
      reading: false,
      WritingTask1:false,
      Home:false,

    });
  }

  gohome() {
    this.setState({
      WritingTask2: false,
      listenning: false,
      reading: false,
      WritingTask1:false,
      Home:true,

    });
  }
  


  render() {
    return (
      <div className="App">
        <div className="App">
          {
            this.state.Home==false &&
            
            <img src={home} alt="Logo" className="Imageswidth" onClick={this.gohome.bind(this)} />
          }

          <div>
            <h3>IELTS MOCK TEST - COMPUTER DELIVERED</h3>
            <div>
              <h4>This is to practice and my little efforts for computer delivered IELTS test. This is only to help candidate to know how the test will be</h4>
              <h5>I am keep updating with the newest test in all sections.</h5>
            </div>

            <br></br>
            {
              this.state.Home==true &&
            <div >
              <div className="Imagesdiv"> 
              <img src={listenning} alt="Logo" className="Imageswidth" onClick={this.changelitens.bind(this)} /></div>
              <div className="Imagesdiv">  <img src={reading} alt="Logo" className="Imageswidth" onClick={this.changereading.bind(this)} /></div>
              <div className="Imagesdiv">  <img src={writing} alt="Logo" className="Imageswidth" onClick={this.changewriting.bind(this)} /></div>
              <div className="Imagesdiv">  <img src={writing2} alt="Logo" className="Imageswidth" onClick={this.changewriting2.bind(this)} /></div>
            </div>
            }
          </div>


          {this.state.WritingTask1 == true &&
            <Writing TimeTogo="1200000"  placeholder="Writing Task 1 - 20 Minutes" />
          }

          {this.state.WritingTask2 == true &&
            <Writing TimeTogo="2400000"   placeholder="Writing Task 2 - 40 Minutes"  />
          }

          {this.state.listenning == true &&
            <h3>Listen</h3>
          }

          {this.state.reading == true &&
            <h3>Reading</h3>
          }
        </div>
      </div>
    )
  };

}

export default App;
