import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { allText } from './actions/action1';
import marked from 'marked';
import { footer } from './constants';

class Footer extends Component {


  render() {
    function createFooter(a) {
      return { __html: a }
    }
    return (
      <div id="footerInReact" dangerouslySetInnerHTML={createFooter(footer)}>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    //this.state=this.props.input;
    //version 2:the line above is not needed because I update fields directly from Redux - dumb component
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("event value in handlechange: ", event.target.value);
    /*
     this.setState({
       showText:this.state.input,
     })
      version 2: this.setState - is not needed  because I update fields directly from Redux   */
    this.props.submitNewInput(event.target.value);
  }

  render() {

    //in markdown, open a link in a new window
    const renderer = new marked.Renderer();
    const linkRenderer = renderer.link;
    renderer.link = (href, title, text) => {
      const html = linkRenderer.call(renderer, href, title, text);
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
    };

    marked.setOptions({
      tables: true,
      gfm: true,
      breaks: true,
    })

    let d = marked(this.props.input.showText, { renderer });

    function createMarkup(a) {
      return { __html: a }
    }

    return (
      <div className="App">
        <header>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1>Markdown Previewer</h1>
        </header>
        <div id="editorBox">
        <label id="editorBoxLabel">Write markdown here:</label>
          <textarea id="editor" value={this.props.input.showText} onChange={this.handleChange} autoFocus />
          {/*version 2: in line above value={this.state.showText} if I update field from React*/}
        </div>
        <div id="previewBox">
        <label id="previewBoxLabel">This is how it looks:</label>
          <div id="preview" dangerouslySetInnerHTML={createMarkup(d)} />
        </div>
        {/*version 2: in line above {this.state.showText} instead if I update field from React*/}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { input: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewInput: (text) => {
      console.log("text in mapDispatch: ", text);
      dispatch(allText(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
