import React from 'react';

//gif
import spinner from "../gif/spinner.gif"

const Loder = () => {
    return (
        <div>
            <img src = {spinner} alt = "loading"/>
            <h1>Loding...</h1>
        </div>
    );
};

export default Loder;