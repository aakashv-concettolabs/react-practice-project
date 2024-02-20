import React from 'react'
import { useState } from 'react';


function Counters() {


    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <>
            <h1>Counters that will work together</h1>
            <Button ram={handleClick} num={count} />
            <Button ram={handleClick} num={count} />
        </>
    );


}

function Button({ num, ram }) {
    return (
        <button onClick={ram} style={{ margin: "10px", padding: "10px" }}>Clicked {num} times</button>
    )

}

export default Counters