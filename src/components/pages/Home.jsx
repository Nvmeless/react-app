import React from 'react'
import Clock from '../cours/Clock'
import MinecraftPlayer from '../cours/MinecraftPlayer'
import { Input } from '../atoms'

const Home = () => {
    return (
        <div>


            Bienvenue sur la page d'accueil
            {/* <Input.Text></Input.Text> */}
            <MinecraftPlayer></MinecraftPlayer>

        </div>
    )
}

export default Home
