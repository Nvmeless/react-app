import axios from 'axios';
import React, { useState, useEffect } from 'react'
const MinecraftPlayer = () => {
    const getUuid = async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://sessionserver.mojang.com/session/minecraft/profile/069a79f444e94726a5befca90e38aaf5',
            headers: {}
        };

        return await axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

        // }


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