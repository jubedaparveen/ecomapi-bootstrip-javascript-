import React, { useContext, useEffect } from 'react'
import { myContext } from './UserContext'
import Nav from './Nav';

function Wishlist() {

    const { Wishlist, setWishlist, Cart, setCart } = useContext(myContext)


    const addtocart = (product) => {
        setCart([...Cart, product])
    }

    const removefromcart = (product) => {
        let FinalCart = Cart.filter((v,i) => v.id != product.id);
        setCart(FinalCart);
    }

    useEffect(() => {
        console.log(Cart)
    }, [Cart])

    const removefromwishlist = (product) => {


        let FinalWishlist = Wishlist.filter((v, i) => v.id != product.id);

        setWishlist(FinalWishlist);
    }

    return (
        <>
            <Nav />
            <div class="cart-wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-heading mb-10">My wishlist</div>
                            <div class="table-wishlist">
                                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                    <thead>
                                        <tr>
                                            <th width="45%">Product Name</th>
                                            <th width="15%">Unit Price</th>
                                            <th width="15%">Cart</th>
                                            <th width="15%">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Wishlist.map((v, i) => {

                                                let btn = Cart.filter((cartProduct, i) => cartProduct.id == v.id)

                                                return (
                                                    <>
                                                        <tr>
                                                            <td width="45%">
                                                                <div class="display-flex align-center">
                                                                    <div class="img-product">
                                                                        <img src={v.thumbnail} alt="" class="mCS_img_loaded" />
                                                                    </div>
                                                                    <div class="name-product">
                                                                        {v.title}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td width="15%" class="price">${v.price}</td>

                                                            <td width="15%">

                                                                {
                                                                    (btn == '') ?
                                                                        <button class="round-black-btn small-btn" onClick={() => addtocart(v)}>Add to Cart</button>
                                                                        :

                                                                        <button class="btn btn-danger rounded-3" onClick={() => removefromcart(v)}>Remove From Cart</button>

                                                                }



                                                                

                                                            </td>
                                                            <td width="10%" class="text-center">
                                                                <button className='btn btn-danger' onClick={() => removefromwishlist(v)}>Remove</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist