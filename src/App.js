import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {allText} from './actions/action1';


class App extends Component {
 
  constructor(props) {
    super(props);
    this.state=this.props.input;
    this.handleChange = this.handleChange.bind(this);
   
  }
  
  handleChange(event) {
    console.log("event value in handlechange: ",event.target.value);
    //this.props.submitNewInput("");
    this.props.submitNewInput(event.target.value);
    
  }

render() {
  console.log("state ",this.state);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Markdown Previewer</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      <textarea id="editor" value={this.state.showText} onChange={this.handleChange} >blue</textarea>
      <section id="preview">
      {this.state.showText}
      </section>
    </div>
  );
}
}

const mapStateToProps = (state) =>{
  return {input:state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewInput:(text)=>{
      console.log("text in mapDispatch: ",text);
      dispatch(allText(text))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
