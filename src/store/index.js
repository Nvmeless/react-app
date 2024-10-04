import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [
    { id: 1, title: "Chasser les chimpokos", isDone: false },
    { id: 2, title: "Terminer les config du serveur mc", isDone: true }
]
const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                title: action.payload,
                isDone: false
            };
            state.push(newTask);
        },
        toggleTask: (state, action) => {
            const task = state.find((t) => {
                return t.id === action.payload
            });
            task.isDone = !task.isDone;
        },
        deleteTask: (state, action) => {

            state = state.filter((t) => t.id !== action.payload)
            return state;
        }
    }
})


const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemon: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPokemon.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.status = "succeed";
                console.log(action.payload)
                state.pokemon = action.payload;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                console.error("FAILED !!!")
                state.status = "failed"
            })
    }
})

export const fetchPokemon = createAsyncThunk('pokemon/fetchPokemon', async (payload = "mew") => {

    const config = {
        url: "https://pokeapi.co/api/v2/pokemon/" + payload,
        method: 'get',

    }

    const response = await axios(config).then((res) => {
        console.log("Respons Got :", res)
        return res;
    }).catch((error) => {
        console.error("ERR :", error)

        return error;
    })


    return response.data;


})






export const {
    toggleTask,
    addTask,
    deleteTask
} = todoSlice.actions



export const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer,
        pokemon: pokeSlice.reducer
    }
})

