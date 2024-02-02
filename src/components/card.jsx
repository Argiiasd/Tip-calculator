import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

const Card = ({number, result}) => {
    const [name, setName] = useState('Person ' + number);
    const [edit, setEdit] = useState(false);
    const [PersonResult, setPersonResult] = useState(result.toFixed(2));
    return (
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-75 rounded-lg p-4 border shadow-lg text-white h-32 w-full">
            <PersonIcon fontSize="large"/>
            {
                edit ? <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> : <p className="text-center">{name} </p>    
            }
            <p className="text-center">${PersonResult}</p>
            <button onClick={() => setEdit(!edit)}>{edit ? 'Save' : 'Edit'}</button>
        </div>
    )
}

export default Card;