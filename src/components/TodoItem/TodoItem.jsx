import { useDispatch } from "react-redux";
import { removeTodo } from "../../store/todoSlice";
import { toggleTodoComplete } from "../../store/todoSlice";

export const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch()

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <span>{text}</span>
            <span className="delete" onClick={() => dispatch(removeTodo({id}))}>Delete</span>
        </li>
    ) 
}