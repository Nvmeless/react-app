import React from 'react'
import PokeApi from '../cours/PokeApi'
import { Todo } from '../cours/Todo'

const Login = () => {
    return (
        <div>Connectez vous les chacalitos
            <PokeApi></PokeApi>
            <Todo></Todo>


        </div>
    )
}

export default Login