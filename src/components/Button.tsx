"use client"
import React from 'react';

const Button = () => {
    return (
        <div className='bg-red-500'>
            <button onClick={()=>{alert("Cliecked")}}>Click</button>
        </div>
    );
};

export default Button;