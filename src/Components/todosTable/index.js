import React from 'react';
import s from './TodosTable.module.css';

const TodosTable = (props) => {
   console.log(props.todos)
   return (
      <div>
         <div className={s.tableTodos}>
            <div>UserId</div>
            <div>Title</div>
            <div>Completed</div>
         </div>
         {props.todos.map(el => <div key={el.id} className={s.tableTodos}>
            <div>{el.userId}</div>
            <div>{el.title}</div>
            <div>
               <select>
                  <option value={el.completed}>{el.completed ? 'Yes' : 'No'}</option>
                  <option value={!el.completed}>{!el.completed ? 'Yes' : 'No'}</option>
               </select></div>
         </div>)}

      </div>
   )
}
export default TodosTable;