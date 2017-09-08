import React, { Component } from 'react';

//4.props
class App extends Component {
  render() {
    return (
      <h1>{this.props.txt}{this.props.cat}</h1>
    );
  }
}
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
  cat: 5
}
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
export default App;
