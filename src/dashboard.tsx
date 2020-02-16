import * as React from 'react';
import dummyData from './data.json';
import ListTodos from './todos';
import './style.css';

export default class Dashboard extends React.Component {
  state = {
    activeUserId: -1,
    todos: []
  };
  userSelected = (event) => {
    const activeUserId = event.target.value;
    const todos = dummyData.todos.filter(o => o.userId == activeUserId);
    this.setState({ activeUserId, todos });
  }
  render () {
    return (
      <div className="body">
        <h1 className="header">Todo Management Dashboard</h1>
        <div style={{ textAlign: 'center' }}>
          <select value={this.state.activeUserId} onChange={this.userSelected}>
            {[{ id: '-1', name: 'Select User'}, ...dummyData.users].map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
          </select>
        </div>
        <div>
          {this.state.todos.map(o => <ListTodos {...o} />)}
        </div>
      </div>
    );
  }
}