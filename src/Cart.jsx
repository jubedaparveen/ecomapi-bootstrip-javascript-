import React, { useContext } from 'react'
import { myContext } from './UserContext';
import Nav from './Nav';

function Cart() {

    const { Wishlist, setWishlist, Cart, setCart } = useContext(myContext);

    const removefromcart = (product) => {
        let FinalCart = Cart.filter((v,i) => v.id != product.id);
        setCart(FinalCart);
    }

    return (
        <>
        <Nav/>
            <div class="container py-3">
                <h3>Shopping Cart</h3>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                        <hr />
                        {
                            Cart.map((v,i) => {
                                return (
                                    <>
                                        <div class="cart-item py-2">
                                            <div class="row">
                                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="d-flex justify-content-between mb-3">
                                                        <img
                                                            class="cart-image d-block"
                                                            src={v.thumbnail}
                                                            alt=""
                                                        />
                                                        <div class="mx-3">
                                                            <h5>{v.title}</h5>
                                                            
                                                            <h5>$ {v.price}</h5>
                                                            <small
                                                                class="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2"
                                                            >In Stock
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                                    <div class="d-flex justify-content-between">
                                                        <div>
                                                            <select class="form-select">
                                                                <option>1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </div>
                                                        <div>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                aria-label="Close"
                                                                onClick={() =>removefromcart(v)}
                                                            ></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-4">
                        <div class="bg-light rounded-3 p-4 sticky-top">
                            <h6 class="mb-4">Order Summary</h6>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>Subtotal</div>
                                <div><strong>Rs. 5000</strong></div>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between align-items-center">
                                <div>Delivery Charge</div>
                                <div><strong>Rs. 100</strong></div>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between align-items-center">
                                <div>Total</div>
                                <div><strong>Rs.5100</strong></div>
                            </div>
                            <button class="btn btn-primary w-100 mt-4">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart