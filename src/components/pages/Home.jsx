import React from 'react'
import Clock from '../cours/Clock'
import MinecraftPlayer from '../cours/MinecraftPlayer'
import { Input } from '../atoms'
import { Todo } from '../cours/Todo'

const Home = () => {
    return (
        <div>


            Bienvenue sur la page d'accueil
            {/* <Input.Text></Input.Text> */}
            <MinecraftPlayer></MinecraftPlayer>
            <Todo></Todo>

        </div>
    )
}

export default Home
