import React from 'react'
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md'
import { Link, Nav } from "./styles"


const SIZE = '32PX'
export const NavBar = () => {
    return (
        <Nav>
            <Link to="/"> <MdHome size={SIZE} /> </Link>
            <Link to="/fav"> <MdFavoriteBorder size={SIZE} /> </Link>
            <Link to="/user"> <MdPersonOutline size={SIZE} /> </Link>
        </Nav>
    )
}
