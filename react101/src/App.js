import React, { Component } from 'react';
import ReactDom from 'react-dom';
//14.create component
class App extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.state = {items:[]};
  }
  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(({results: items}) => {
        // console.log(data.results);
        this.setState({items});
      });
  }
  filter(e) {
    this.setState({filter: e.target.value});
  }
  render() {
    let items = this.state.items;
    if(this.state.filter){
      items = items.filter( item => 
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }
    return (
      <div>
        {/*{items.map( item => <h4 key={item.name}>{item.name}</h4> )}*/}
        <input type="text" onChange={this.filter} />
        {items.map( item => <Person key={item.name} person={item} /> )}
      </div>
    );
  }
}
const Person = (props) => <h4 >{props.person.name}</h4>
//13.componentWillReceiveProps
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {increasing: false}
//     this.update = this.update.bind(this);
//   }
//   update(e) {
//     console.log("update");
//     ReactDom.render(
//       <App val={this.props.val + 1} />,
//       document.getElementById('root')
//     );
//   }
//   render() {
//     console.log(this.state.increasing);
//     return (
//       <button onClick={this.update}>{this.props.val}</button>
//     );
//   }
//   componentWillReceiveProps(nextProps) {
//     console.log("componentWillReceiveProps");
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate");
//     return nextProps.val % 5 === 0;
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(`prevProps ${prevProps.val}`);
//   }
// }
// App.defaultProps = {
//   val: 0
// }
//12.manage state with lifecycle
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {val: 0}
//     this.update = this.update.bind(this);
//   }
//   componentWillMount() {
//     console.log('componentWillMount');
//     this.setState({m:2})
//   }
//   update(e) {
//     this.setState({val: this.state.val+1})
//   }
//   render() {
//     console.log('render');
//     return (
//       <button onClick={this.update}>{this.state.val*this.state.m}</button>
//     );
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//     this.inc = setInterval(() => {
//       this.update();
//     }, 500)
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//     clearInterval(this.inc);
//   }
// }
// class Wrapper extends Component {
//   mount() {
//     ReactDom.render(<App/>, document.getElementById('a'));
//   } 
//   unmount() {
//     ReactDom.unmountComponentAtNode(document.getElementById('a'));
//   } 
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount}>mount</button>
//         <button onClick={this.unmount}>unmount</button>
//         <div id="a"></div>
//       </div>
//     );
//   }
// }
//11.lifecycle
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {val: 0}
//     this.update = this.update.bind(this);
//   }
//   componentWillMount() {
//     console.log('componentWillMount');
//   }
//   update(e) {
//     this.setState({val: this.state.val+1})
//   }
//   render() {
//     console.log('render');
//     return (
//       <button onClick={this.update}>{this.state.val}</button>
//     );
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }
// }
// class Wrapper extends Component {
//   mount() {
//     ReactDom.render(<App/>, document.getElementById('a'));
//   } 
//   unmount() {
//     ReactDom.unmountComponentAtNode(document.getElementById('a'));
//   } 
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount}>mount</button>
//         <button onClick={this.unmount}>unmount</button>
//         <div id="a"></div>
//       </div>
//     );
//   }
// }
//10.refs
//  class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       a: '',
//       b: ''
//     }
//     this.update = this.update.bind(this);
//   }
//   update(e) {
//     this.setState({
//       // a: this.refs.a.value,
//       //a: this.a.value,
//       a: this.a.refs.input.value,
//       b: this.refs.b.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         {/*  <input type="text" onChange={this.update} ref="a"/>*/}
//         {/*<input type="text" onChange={this.update} ref={node => this.a = node}/>
//         {this.state.a}*/}
//         <Input ref={component => this.a = component} update={this.update}/>{this.state.a}
//         <hr />
//         <input type="text" onChange={this.update} ref="b"/>
//         {this.state.b}
//       </div>
//     );
//   }
// }
// class Input extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" ref="input" onChange={this.props.update}/>      
//       </div>
//     )
//   }
// }
//9.synthetic event system
//  class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentEvent: '----'
//     }
//     this.update = this.update.bind(this);
//   }
//   update(e) {
//     this.setState({
//       currentEvent: e.type
//     })
//   }
//   render() {
//     return (
//       <div>
//         <textarea 
//           onFocus = {this.update}
//           onCopy = {this.update}
//           onCut = {this.update}
//           onPaste = {this.update}
//           cols = "30"
//           rows = "10"
//         />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     );
//   }
// }
//8.propType validation
// class App extends Component {
//   render() {
//     return (
//       <Title text='text12'/>
//     );
//   }
// }
// const Title = (props) => <h1>{props.text}</h1>;
// Title.propTypes = {
//   text(props, propName, component) {
//     if(!(propName in props)) {
//       return new Error(`miss ${propName}`);
//     }
//     if(props[propName].length <6) {
//       return new Error('${propName} was too short');
//     }
//   }
// }
//7.props.children
// class App extends Component {
//   render() {
//     return (
//       <Button>I <Heart/> react</Button>
//     );
//   }
// }
// const Button = (props) => <button>{props.children}</button>
// class Heart extends Component {
//   render() {
//     return (
//       <span>&hearts;</span>
//     );
//   }
// }
//6.
// class App extends Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       txt: 'this is a state'
//     };
//   }
//   update(e) {
//     this.setState({
//       txt: e.target.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
      
//     );
//   }
// }
// const Widget = (props) => 
//   <input type='text' onChange={props.update}/>

//5.setState
// class App extends Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       txt: 'this is a state'
//     };
//   }
//   update(e) {
//     this.setState({
//       txt: e.target.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)}/>
//         <h1>{this.state.txt}</h1>
//       </div>
      
//     );
//   }
// }
//4.props
// class App extends Component {
//   render() {
//     return (
//       <h1>{this.props.txt}{this.props.cat}</h1>
//     );
//   }
// }
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
// App.defaultProps = {
//   cat: 5
// }
//3.output 
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hello world</h1>
//         <b>bold</b>
//       </div>
//     );
//   }
// }

//2.create component
// class App extends Component {
//   render() {
//     return (
//       <h1>hello world</h1>
//     );
//   }
// }
// const App = () => <h1>hello stateless</h1>;
// export default Wrapper;
export default App;
