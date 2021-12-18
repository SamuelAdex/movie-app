import React, {useContext} from 'react';
import logo from '../logo.png'
import MovieContext from '../Context/MovieContext'


const Header = ()=>{

    const {searchValue, setSearchValue} = useContext(MovieContext)

    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="" />
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