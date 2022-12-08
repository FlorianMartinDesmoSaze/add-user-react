import React, { useState } from 'react';

const userList = []

const SoloUserForm = () => {

    const [users, setUsers] = useState(userList)
    const [name, setName] = useState('nobody')
    // const [text, setText] = useState()

    return (
        <div className="user-form">
            <h2>You're adding {name}</h2>
            <input type={name} value={name} onChange={e => setName(e.target.value)} />
            <button onClick={ () => {
                setName('nobody')
                setUsers([{
                    index: Math.floor(Math.random() * 10000),
                    name: name
                }, ...users])
            }}
            >Submit</button>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.index}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SoloUserForm;