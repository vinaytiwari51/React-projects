import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../features/items';

 export const store = configureStore({
    reducer: todoSlice
    
})




// import {configureStore} from '@reduxjs/toolkit';
//  import todoReducer from '../features/todo/todoSlice';
 
//  export const store = configureStore({
//      reducer: todoReducer
//  })