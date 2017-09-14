import React, { Component } from 'react';
import './JSXCompiler.css'
class JSXCompiler extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
        input: '/*add your jsx here*/',
        output: '',
        err: ''
      };
      this.update = this.update.bind(this);
    }
    update(e) {
        
        let code = e.target.value;
        try{
            this.setState({
                output: window.Babel.transform(code, {presets:['es2015', 'react']}).code,
                err: ''
            })
        }catch(err){
            this.setState({err: err.message});
        }   
    }
    render() {
        return (
          <div>
            <header>{this.state.err}</header>
            <div className="container">
                <textarea 
                    onChange={this.update}
                    defaultValue={this.state.input}
                />
                <pre>{this.state.output}</pre>
            </div>
          </div>
        )
    }
}
export default JSXCompiler;