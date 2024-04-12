import React from 'react';
import {Link} from "react-router-dom";

const N = () => {
    return (
        <div className='nav'>
            <center>
<Link to="/home">Home</Link>
<Link to="/create">Create</Link>
<Link to="/delete">Delete</Link>
<Link to="/updatea">Update</Link></center>

        </div>
    );
}

export default N;
