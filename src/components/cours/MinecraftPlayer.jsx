import axios from 'axios';
import React, { useState, useEffect } from 'react'
const MinecraftPlayer = () => {
    const getUuid = () => {
        let data = '';

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://minecraft-api.com/api/uuid/ShogunJin',
            headers: {},
            data: data
        };


        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getUuid();
    }, [])


    return (
        <>

        </>
    )
}

export default MinecraftPlayer