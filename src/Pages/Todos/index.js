import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../API';
import TodosTable from '../../Components/todosTable';
import Preloader from '../../imgs/loader.gif';
import s from './Todos.module.css';

const Todos = (props) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [isFetching, setIsFetching] = useState(false);
   const [totalCount, setTotalCount] = useState();
   const dispatch = useDispatch();
   const todos = useSelector(el => el.reducerTodos.todos)

   useEffect(() => {
      API.getTodo(
         dispatch, setIsFetching, currentPage,
         setCurrentPage, todos, setTotalCount
      );
   }, [isFetching, totalCount])

   const scrollHandler = (e) => {
      const isLimit = e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 100;

      if (isLimit && todos.length < totalCount) {
         setIsFetching(true)
      }
      /* 
            console.clear()//очистка консоли
            console.log('высота страницы', e.target.documentElement.scrollHeight)
            console.log('текущее положение скролла от верха страницы', e.target.documentElement.scrollTop)
            console.log('высота видимого экрана (высота браузера)', window.innerHeight)
      */
   }

   useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return () => {
         document.removeEventListener('scroll', scrollHandler)
      }
   }, [todos])

   return (
      <div>
         {todos.length ?
            <TodosTable todos={todos} /> :
            <div className={s.imgContainer}>
               <img src={Preloader} alt="Preloader" />
            </div>}

         {isFetching && <div className={s.imgContainer}>
            <img src={Preloader} alt="Preloader" />
         </div>}

      </div>
   )
}
export default Todos;