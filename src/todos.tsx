import * as React from 'react';

const ListTodos = ({ completed, title }) => {
  const [isEditing, toggleIsEditing] = React.useState(false);
  const [text, updateText] = React.useState(title);

  function editText(evt) {
    toggleIsEditing(true);
    updateText(evt.target.value);
  }
  
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <input type="text" value={text} onChange={evt => editText(evt)}/>
      <button disabled={!isEditing}>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default ListTodos;