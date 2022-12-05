import React, { useState } from 'react';


const AddUser = () => {
    const [name, setName] = useState("Stranger");
    const [age, setAge] = useState(null);

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }

    return (
        <div className="user">
            <form>
                <h2>Hello {name}
                    {age && <div>your are {age} years old</div>}
                </h2>
                <p>Name</p>
                <input type="text" onChange={handleName} />
                <p>Age</p>
                <input type="number" onChange={handleAge} />
                {/* <input type="submit" value="submit" /> */}
            </form>
        </div>
    );
}

export default AddUser;