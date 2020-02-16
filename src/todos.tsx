import * as React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


const ListTodos = ({ completed, title }) => {
  const [isEditing, toggleIsEditing] = React.useState(false);
  const [text, updateText] = React.useState(title);
  const [completed, updateCompleted] = React.useState(completed);

  function editText(evt) {
    toggleIsEditing(true);
    updateText(evt.target.value);


  }
  function handleToggleUpdate(e) {
    toggleIsEditing(false);
  }

  function handleClick(e) {
    updateCompleted(!completed)
  }

  return (
    <Table>
      <tbody>
        <tr>
          <td>
          <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" checked={completed} onChange={e => handleClick(e)} />
          </InputGroupText>
        </InputGroupAddon>
        <Input value={text} onChange={evt =>  (evt)} />
      </InputGroup>

          </td>
          <td>
            <Button color="primary" disabled={!isEditing} onClick={e => handleToggleUpdate(e)}>Update</Button>
          </td>
          <td>
            <Button color="primary" >Delete</Button>
          </td>
      </tr>
      </tbody>
    </Table>
      );
    }
    
export default ListTodos;