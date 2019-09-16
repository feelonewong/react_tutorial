import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['React','Vue','Angular']
    }
  }

  render() {
    const {inputValue,list} = this.state
    return (
      <div className="wrapper">
        <input value={inputValue} type="text" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        <ul className="my-list">
          {list.map(
            (item,index)=>{
              return(
                <li
                  onClick={this.handleliClick.bind(this,index)}
                  key={index}
                >{item}</li>
              )
            }
          )}
        </ul>
      </div>
    )
  }

  handleChange(e) {
    const inputValue = e.target.value
    this.setState({
      inputValue
    })
  }
  handleSubmit(){
    const {inputValue,list} = this.state
    if(inputValue){
      list.push(inputValue)
      this.setState({
        list,
        inputValue:''
      })
    }else{
      alert('please input some data')
    }

  }
  handleliClick(index){
    const {list} = this.state
    list.splice(index,1)
    this.setState({
      list
    })
  }
}

export default App;