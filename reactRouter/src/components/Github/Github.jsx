import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

function Github() {

    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("data is here..", data)
    //             setdata(data)
    //         })
    // }, [])

    const data = useLoaderData()

    return (
        <div className=' m-4 bg-gray-600 text-white p-4'>
            <h1 className='text-xl'>Name: {data.name}</h1>
            <p>Bio: {data.bio}.</p>
            <p>Followers: {data.followers}</p>
            <p>Github url: {data.url}</p>
        </div>
    )
}

export default Github