import * as React from 'react';
import dummyData from './data.json';
import ListTodos from './todos';
import './style.css';
import { Button ,Input} from 'reactstrap';

export default class AddTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.addNewTodo = this.addNewTodo.bind(this)
  }


  handleChange(e){
    this.setState({
      todo: e.target.value
    })
  }

  addNewTodo(){
      this.props.addNewTodo(this.state.todo)
      this.setState({
          todo :""
      })
  }
  userSelected = (event) => {
    const activeUserId = event.target.value;
    const todos = dummyData.todos.filter(o => o.userId == activeUserId);
    this.setState({ activeUserId, todos });
  }
  render() {
    return (
        <div>
        Add Todo <Input value = {this.state.todo} onChange ={this.handleChange}></Input>
        {"  "}
        <Button color="primary" onClick ={this.addNewTodo}>Save</Button>

        </div>
        
      
    )
  }
}