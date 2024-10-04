import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTask, addTask, deleteTask, fetchPokemon } from '../../store';
export const Todo = () => {
    const [inputValue, setInputValue] = useState("Nouvelle Tache");
    const dispatch = useDispatch();

    const tasks = useSelector((state) => {
        return state.todoList
    })




    const renderTasks = () => {

        return tasks ? tasks.map((task) => {
            return <div><span onClick={() => dispatch(toggleTask(task.id))}>{task.isDone ? "Fait" : "Pas fait"}</span> - {task.title} <span onClick={() => { dispatch(deleteTask(task.id)) }}>X</span> </div>
        }) : 'Tout est fait !'

    }

    const onInputChange = (event, value) => {
        if (value !== inputValue) {
            setInputValue(value);


        }
    }




    return (
        <div>
            {
                renderTasks()
            }
            <input onChange={(e) => {
                onInputChange(e, e.target.value)
            }} />
            <button onClick={() => {
                dispatch(addTask(inputValue))
                dispatch(fetchPokemon(inputValue));
            }}>
                Nouvelle Tache
            </button>
        </div>
    )

}