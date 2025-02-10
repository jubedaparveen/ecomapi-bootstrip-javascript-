import React, { useContext } from 'react'
import { myContext } from './UserContext'
import { Link } from 'react-router-dom'

function Nav() {

    const { Wishlist, setWishlist, Cart, setCart } = useContext(myContext);

    return (
        <>
            <div className='row border border-bottom border-black shadow-lg'>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-primary border-primary border rounded-4 p-1 text-bold" to={'/'}>ECOMMMERCE</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item border-primary border rounded-4 me-1">
                                    <Link className="nav-link active  text-primary" aria-current="page" to={'/wishlist'}>Wishlist ({Wishlist.length})</Link>
                                </li>
                                <li className="nav-item  border-primary border rounded-4 ">
                                    <Link className="nav-link active  text-primary" aria-current="page" to={'/cart'}>Cart ({Cart.length})</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav