import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Input } from "../atoms";
const MinecraftPlayer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null)
    const [inputText, setInputText] = useState(null);


    const getUuid = async () => {

        if (isLoading === true && data === null) {
            let options = {
                method: "GET",
                redirect: "follow"
            }

            await fetch('https://httpbin.org/get', options)
                .then((response) => response.json())
                .then((result) => {
                    setData(result);
                    setIsLoading(false)
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    setIsLoading(false)
                })
        } else {

            return data
        }



        // let config = {
        //     method: 'get',
        //     maxBodyLength: Infinity,
        //     url: 'https://httpbin.org/get',
        //     headers: {}
        // };

        // return await axios.request(config)
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        // }



    }


    useEffect(() => {
        getUuid();
    }, [])

    useEffect(() => {

    }, [isLoading])
    return (
        <>
            <Input.Text handleText={(text) => {
                // console.log(text)
                setInputText(text);
            }}></Input.Text>


            {inputText}
            {/* {isLoading ? (
                <h1>Appel en cours de chargement</h1>
            ) : (<h1>{JSON.stringify(data.headers)}</h1>)} */}
        </>
    )
}

export default MinecraftPlayer