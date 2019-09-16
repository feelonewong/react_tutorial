import React, {Component} from 'react'
import Item from './Item'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['React','Vue','Angular']
    }
    this.handleliDelete = this.handleliDelete.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount---')
  }

  render() {
    console.log('rendering--')
    const {inputValue,list} = this.state
    return (
      <div className="wrapper">
        <input value={inputValue}
               type="text"
               ref={(input)=>{this.input=input}}
               onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        <ul className="my-list" ref={(ul)=>{this.ul=ul}}>

          {list.map(
            (item,index)=>{
              return(
                <Item
                  key={index}
                  index={index}
                  content={item}
                  handleliDelete={this.handleliDelete}
                />
              )
            }
          )}
        </ul>
      </div>
    )
  }

  handleChange() {
    //const inputValue = e.target.value
    this.setState({
      inputValue:this.input.value
    })
  }
  handleSubmit(){
    const {inputValue,list} = this.state
    if(inputValue){
      list.push(inputValue)
      this.setState({
        list,
        inputValue:''
      },()=>{
        console.log(this.ul.querySelectorAll('li').length)
      })
    }else{
      alert('please input some data')
    }
  }
  handleliDelete(index){
    var isdeleteDate = window.confirm("Are you sure delete this date?")
    if(isdeleteDate){
      const {list} = this.state
      list.splice(index,1)
      this.setState({
        list
      })
    }
  }
}

export default App;