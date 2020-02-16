import * as React from 'react';
import dummyData from './data.json';
import ListTodos from './todos';
import './style.css';
import AddTodo from "./addTodo"
import uuid from 'uuid/v1';
import History from "./history"
import { Container, Row, Col } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Badge } from 'reactstrap';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUserId: -1,
      todos: [],
      tabSelected: "todos",
      history: [],
      currentUser: "Select User"

    };
    this.handleTodos = this.handleTodos.bind(this)
    this.addTodo = this.addTodo.bind(this)
    this.history = this.history.bind(this)
    this.addNewTodo = this.addNewTodo.bind(this)
    this.userSelected = this.userSelected.bind(this)
  }

  handleTodos() {
    this.setState({
      tabSelected: "todos"
    })
  }

  addTodo() {
    this.setState({
      tabSelected: "addTodo"
    })
  }

  history() {
    this.setState({
      tabSelected: "history"
    })
  }
  addNewTodo(todo) {
    let id = uuid()
    const user = dummyData.users.filter(o => o.id == this.state.activeUserId);
    let newTodo =
    {
      "userId": this.state.activeUserId,
      "id": id,
      "title": todo,
      "completed": false
    }

    let history = {
      type: "ADDED_TODO",
      id: id,
      user_id: this.state.activeUserId,
      text: todo,
      time: new Date(),
      admin: this.state.currentUser

    },


    this.setState({
      todos: [...this.state.todos, newTodo],
      history: [...this.state.history, history]
    })
  }

  userSelected = (event) => {
    const user = dummyData.users.filter(o => o.id == event.target.value);
    const activeUserId = event.target.value;
    const todos = dummyData.todos.filter(o => o.userId == activeUserId);
    this.setState({ activeUserId, todos, currentUser: user[0].name });
  }
  render() {
    return (


      <Container>
        <Row>
          <Col> <div> <h1 className="display-3" >Todo Management Dashboard</h1></div></Col>

        </Row>
        <Row>
          <Col>

            <div style={{ textAlign: 'center' }}>
              <UncontrolledDropdown>
                <DropdownToggle caret>
                  {this.state.currentUser}
                </DropdownToggle>
                <DropdownMenu >
                  {[{ id: '-1', name: 'Select User' }, ...dummyData.users].map(o => <DropdownItem key={o.id} value={o.id} onClick={this.userSelected}>{o.name}</DropdownItem>)}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Col>
        </Row>
        <Row>
          <Col> <div>   {
                this.state.todos.length > 0 &&
                <div>
                  <Button color="info"  onClick={this.handleTodos}>Todos</Button>{' '}
                  <Button  color="info" onClick={this.history} >
                    History
            </Button>{' '}
                  <Button color="info" onClick={this.addTodo}> Add Todo</Button>
                </div>
              }</div></Col>

        </Row>
        <Row>
          <Col>
            <div>
              <div>
                {this.state.tabSelected !== "history" &&
                  this.state.todos.map(o =>
                    <ListTodos {...o} />)}
              </div>
              <div>
                {this.state.tabSelected === "history" &&
                  this.state.history.map(o =>
                    <History {...o}></History>)}
              </div>
            </div>

          </Col>
          {this.state.tabSelected === "addTodo" &&
            <Col>
              <AddTodo addNewTodo={this.addNewTodo}></AddTodo>
            </Col>
          }
        </Row>
      </Container>

    );
  }
}