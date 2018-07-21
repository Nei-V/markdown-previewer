import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {allText} from './actions/action1';


class App extends Component {
 
  constructor(props) {
    super(props);
    //this.state=this.props.input;
    //version 2:the line above is not needed because I update fields directly from Redux - dumb component
    this.handleChange = this.handleChange.bind(this);
   
  }
  
  handleChange(event) {
    console.log("event value in handlechange: ",event.target.value);
   /*
    this.setState({
      showText:this.state.input,
    })

    version 2: this.setState - is not needed  because I update fields directly from Redux   */
    this.props.submitNewInput(event.target.value);
    
  }

render() {
  //console.log("state ",this.state);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Markdown Previewer</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
      <textarea id="editor" value={this.props.input.showText} onChange={this.handleChange} >blue</textarea>
      {/*version 2: in line above value={this.state.showText} if I update field from React*/}
      <section id="preview">
      {this.props.input.showText}
      {/*version 2: in line above {this.state.showText} instead if I update field from React*/}
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
