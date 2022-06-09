import { add_todo, edit_todo, remove_todo, toggle_status } from "./actiontypes";
//



export const Addtodo = (value) =>({type:add_todo, payload:value});

export const Removetodo = (id) => ({ type: remove_todo, payload: id });

export const Edittodo = (id) => ({ type: edit_todo, payload: id });

export const Togglestatus = (value) => ({type:toggle_status, payload:value})
