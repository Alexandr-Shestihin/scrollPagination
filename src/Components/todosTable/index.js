import React from 'react';
import s from './TodosTable.module.css';

const TodosTable = (props) => {

   return (
      <div>
         <div className={s.tableTodos}>
            <div>UserId</div>
            <div>Title</div>
            <div>Id</div>
         </div>
         {props.todos.map(el => <div key={el.id} className={s.tableTodos}>
            <div>{el.userId}</div>
            <div>
               <select>
                  <option value={el.title}>{el.title}</option>
                  <option value="Other data 1">Other data 1</option>
                  <option value="Other data 2">Other data 2</option>
               </select>
            </div>
            <div>{el.id}</div>
         </div>)}

      </div>
   )
}
export default TodosTable;