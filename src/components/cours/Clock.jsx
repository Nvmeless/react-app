import React, { useState, useEffect } from 'react'

const Clock = () => {

    const [time, setTime] = useState(0);




    const increment = () => {
        setTime(time + 1);
    }
    useEffect(() => {

        const interval = setInterval(() => {
            console.log("Interval")
        }, 1000);
        console.log("UseEffect")

        return () => {
            console.log("Cleared")
            clearInterval(interval)

        };

    }, [time])

    

    // const createTimeInterval = () => {

    // }


    // createTimeInterval();

    return (
        <div onClick={increment}>{time}</div>
    )
}



// class Clock extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         setInterval(() => {
//             setTime(time + 1);
//             console.log(time)
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval( interval)
//     }

//     componentDidUpdate(){
//         lszkjnglkb
//     }


// }

export default Clock