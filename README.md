# react101
learn from <https://egghead.io/courses/start-learning-react>

### 1.使用create-react-app创建工程    
npm install -g create-react-app  
create-react-app react101

***
### 2.创建 component
2.1 创建普通的component `class App extends React.Component`    
2.2 创建无状态component stateless component   
`const App = () => <h1>hello stateless</h1>`

***
### 3.输出多个元素时要用一个元素包裹多个元素
`<div><h1>hello world</h1><b>bold</b></div>`
 
 ***
 ### 4.props
 4.1 使用this.props.key获取在component上定义的属性  
 4.2 使用propTypes定义属性的类型和必须定义的属性  
 `App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}`  
   数字需要使用{}来赋值  
   `<App txt='this is a props value' cat={5}/>`  
 4.3 使用defaultProps设置默认属性值  
 `App.defaultProps = {
  cat: 5
}`

***
### 5.setState
constructor里声明state属性，setState改变属性值

***
### 6.component包含无状态的component
`const Widget = (props) => 
  <input type="text" onChange={props.update}/>`
  
***
### 7.用this.props.children获取innerHTML和嵌套的子元素
`class App extends Component {
  render() {
    return (
      <Button>I <Heart/> react</Button>
    );
  }
}
const Button = (props) => <button>{props.children}</button>
class Heart extends Component {
  render() {
    return (
      <span>&hearts;</span>
    );
  }
}`

***
### 8.自定义propType validation
`Title.propTypes = {
  text(props, propName, component) {
    if(!(propName in props)) {
      return new Error(`miss ${propName}`);
    }
    if(props[propName].length <6) {
      return new Error('${propName} was too short');
    }
  }
}`

***
### 9.synthetic event system
`class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEvent: '----'
    }
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      currentEvent: e.type
    })
  }
  render() {
    return (
      <div>
        <textarea 
          onFocus = {this.update}
          onCopy = {this.update}
          onCut = {this.update}
          onPaste = {this.update}
          cols = "30"
          rows = "10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}`

***
### 10.使用this.refs.获取指定元素
使用ref直接定义属性`ref="a"`，使用this.ref.a获取元素  
或者使用`ref={node => this.a = node}` 定义a属性，使用this.a获取元素  
或者获取包含component的指定元素`ref={component => this.a = component}`,在component中指定input属性,使用this.a.refs.input获取元素

***
### 11.component生命周期
componentWillMount componentDidMount componentWillUnmount执行一次  render组件状态变化时执行

***
### 12.与生命周期方法交互
在componentDidMount绑定更改state的方法后，在componentWillUnmount里解除该绑定

***
### 13.componentWillReceiveProps props改变时调用该方法
shouldComponentUpdate 是否更新元素状态
componentDidUpdate 元素状态更新完成 shouldComponentUpdate返回true时 调用render再调用componentDidUpdate

***
### 14.动态获取数据创建component
在componentWillMount方法里使用fetch获取数据setState

***
### 15.higher order component高阶组件装饰器
HOC先mount，被包裹的组件再mount  
通过{...this.props}{...this.state}传递属性  
被包裹组件通过props.获取属性 状态 方法

***
### 16.jsx compiler 
引入babel， 用babel.transform返回code

***
### 17.jsx转换成React.createElement

***
### 18.React.Children
this.props.children 包含单个子元素的时候返回单个object  
可用React.Children.map(this.props.children, () => {})
或React.Children.forEach(this.props.children, () => {})遍历children  
可用React.Children.toArray(items)转换成数组  
包含单个子元素时可用React.Children.only(this.props.children）获取

***
### 19.React.cloneElement
用React.cloneElement给元素扩展方法

***
