import React, { useState } from 'react';


const InputComponent = ({ placeholder, searchHandler, fluid = false }) => {

    const [sinput, setSinput] = useState('');

    const inputHandler = (event) => {
        event.preventDefault();
        const trimmedData = sinput.trim();
        if (!trimmedData.length <= 0) {
            searchHandler(trimmedData);
        }
    }
    return (
        <>
            <form>
                <div className={`ui action input focus ${fluid === true ? 'fluid' : ''}`}>
                    <input value={sinput} type="text" placeholder={placeholder} onChange={(e) => setSinput(e.target.value)} />
                    <button className="ui button primary" onClick={inputHandler}>Search</button>
                </div>
            </form>
        </>
    )
}

export default InputComponent
