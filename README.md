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
`<div><h1>hello world</h1>
      <b>bold</b>
 </div>`
 
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
