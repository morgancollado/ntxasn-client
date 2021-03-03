import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
           <h2>Welcome to NTXASN, please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> </h2>  
        </div>
    )
}
export default Home
