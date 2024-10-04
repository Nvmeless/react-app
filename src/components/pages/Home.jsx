import React from 'react'
import Clock from '../cours/Clock'
import MinecraftPlayer from '../cours/MinecraftPlayer'
import { Input } from '../atoms'
import { Todo } from '../cours/Todo'
import ThreeDFrame from '../cours/ThreeDFrame'
import Box from '../cours/Box'

const Home = () => {
    return (
        <div>


            Bienvenue sur la page d'accueil
            {/* <Input.Text></Input.Text> */}
            <MinecraftPlayer></MinecraftPlayer>
            <Todo></Todo>
            <ThreeDFrame><Box></Box></ThreeDFrame>
        </div>
    )
}

export default Home
