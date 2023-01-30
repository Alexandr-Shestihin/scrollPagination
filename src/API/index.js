import axios from "axios";
import { addTodos } from "../reducers/todoReducer";


export const API = {
   getTodo(dispatch, setIsFetching, currentPage, setCurrentPage, todos, setTotalCount) {
      axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=50&_page=${currentPage}`)
         .then(response => {
            dispatch(addTodos([...todos, ...response.data]));
            setTotalCount(response.headers['x-total-count'])
            setCurrentPage(currentPage + 1)
         })
         .then(() => setIsFetching(false))
         .catch(() => setIsFetching(1))
   }
}