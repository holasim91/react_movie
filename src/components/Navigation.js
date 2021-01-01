import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'
const Navigation = () => {
    return (
        <div className='nav'> 
            {/* a태그는 전체를 리프레시한다 */}
            <Link to="/">Home</Link>
            <Link to='about'>About</Link>
        </div>
    )
}

export default Navigation
