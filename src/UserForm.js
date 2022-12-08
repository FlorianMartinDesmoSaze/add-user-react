import React, { useState } from 'react';

const userList = [];

const UserForm = () => {
    const [list, setList] = useState(userList)
    const [text, setText] = useState('')
    const [form, setForm] = useState({
        name: '',
        age: null
    });

    // const handleList = () => {
    //     setList(() => {
    //         userList.push({
    //             name: form.name,
    //             age: form.age
    //         })
    //     })
    // }

    return (
        <div className="user-form">
            <h2>Hello {form.name}
            {form.age && <div className='age'> Your are {form.age} years old</div>}
            </h2>
            <label>
                Name:
                <input value={form.name} onChange={e => {
                    setForm({
                        ...form,
                        name: e.target.value
                    })
                }} />
            </label>
            <label>
                Age:
                <input value={form.age} onChange={e => {
                    setForm({
                        ...form,
                        age: e.target.value
                    })
                    console.log(`my form ${form.id}`)
                }} />
            </label>
            <input type="submit" value="submit"
                onClick={() => {
                    setText('');
                    // handleList();
                    setList([{
                        id: list.length,
                        text: text
                    }, ...list]);
                }}
            />
            <ul>
                {list.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UserForm;