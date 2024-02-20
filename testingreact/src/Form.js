import React, { useState } from 'react'

function Form() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    // const [fullName, setFullName] = useState('')

    const fullName = firstName + " " + lastName

    function handleFirstNameChange(e) {
        setFirstName(e.target.value)
        // setFullName(e.target.value + " " + lastName)
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value)
        // setFullName(firstName + " " + e.target.value)
    }

    return (
        <div>
            <h2>Let's Check you in</h2>
            <label>First Name: {" "}
                <input type="text" value={firstName}
                    onChange={handleFirstNameChange} />
            </label>
            <br />
            <br />
            <label>Last Name: {" "}
                <input type="text" value={lastName}
                    onChange={handleLastNameChange} />
            </label>
            <br />
            <p>Your ticket will be issued to: <b>{fullName}</b></p>

        </div>
    )
}

export default Form