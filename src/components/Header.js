import React, {useContext} from 'react';
import logo from '../logo.png'
import MovieContext from '../Context/MovieContext'
import {Link} from 'react-router-dom'

const Header = ()=>{

    const {searchValue, setSearchValue} = useContext(MovieContext)

    return(
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="search-bar">
                <input type="text" 
                value={searchValue} 
                onChange={(e)=> setSearchValue(e.target.value)} placeholder="Search Movies..." />
            </div>
        </header>
    )
}

export default Header;