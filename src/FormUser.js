import React, { useState } from 'react';

const userList = [];

const UserForm = () => {
    const [list, setList] = useState(userList)
    const [name, setName] = useState('Stranger')

    // const handleName = (e) => {
    //     setName(e.target.value);
    // }

    return (
        <div className="user-form">
            <h2>Hello {name}</h2>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=> {
                setName('')
                setList([{
                    id: Math.floor(Math.random() * 1000000),
                    text: name
                }, ...list])
            }}>Submit</button>
            <ul>
                {list.map(name => (
                    <li key={name.id}>{name.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserForm;