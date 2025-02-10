import axios from "axios";
import "./App.css";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { myContext } from "./UserContext";

function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [loader, setloader] = useState(true);

  const { Wishlist, setWishlist } = useContext(myContext);

  const addtowishlist = (product) => {
    let wishObj = {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,
      quantity: 1,
    };

    setWishlist([...Wishlist, wishObj]);
  };

  const removefromwishlist = (product) => {
    let FinalWishlist = Wishlist.filter((v, i) => v.id != product.id);

    setWishlist(FinalWishlist);
  };

  const getCategory = (e) => {
    // console.log(e.target);
    let categoryName = e.target.value;
    if (e.target.checked) {
      setSelectCategory([...selectCategory, categoryName]);
    } else {
      let finalSelectedCategory = selectCategory.filter(
        (v, i) => v != categoryName
      );
      setSelectCategory(finalSelectedCategory);
    }
  };

  let filerDataAccordingCategory = async () => {
    let AllPromices = selectCategory.map(async (category, i) => {
      let Api = `https://dummyjson.com/products/category/${category}`;

      return axios
        .get(Api)
        .then(function (response) {
          return response.data.products;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    });

    let FinalFilterData = await Promise.all(AllPromices);

    setAllProducts(FinalFilterData.flat());
  };

  useEffect(() => {
    if (selectCategory.length == 0) {
      showProducts();
    } else {
      filerDataAccordingCategory();
    }
  }, [selectCategory]);

  let showProducts = () => {
    let Api;

    if (selectCategory.length == 0) {
      Api = `https://dummyjson.com/products?limit=194`;

      axios
        .get(Api)
        .then(function (response) {
          // handle success
          setAllProducts(response.data.products);
          setloader(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then(function (response) {
        // handle success
        setCategoryList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    showProducts();
  }, []);

  // console.log(selectCategory)

  return (
    <>
      <div className="container-fluid ">
        <Nav />
        <div className="row my-1 ">
          <div className="col-12  ">
            <h1 className="text-center text-primary border-primary  border border-5  rounded-4">
              {" "}
              E-Commerce Website Integrate Api{" "}
            </h1>
          </div>
          <div className="col-12 my-1 shadow-lg ">
            <div className="row">
              <div className="col-2 p-2  border shadow-lg ">
                <h3 className="text-center my-2 text-center text-primary border-primary  border border  rounded-4">
                  {" "}
                  Caltegory List{" "}
                </h3>
                {categoryList.map((v, i) => {
                  return (
                    <>
                      <div className="px-3 py-2" key={i}>
                        <input
                          type="checkbox"
                          value={v}
                          className="mx-2"
                          onClick={getCategory}
                        />
                        {v}
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="col-10 p-2 border border-1 ">
                <div className="row justify-content-around ">
                  <div className=" px-5">
                    <h3 className="text-center my-2 text-center text-primary border-primary  border  rounded-4 ">
                      {" "}
                      Products{" "}
                    </h3>
                  </div>

                  {loader ? (
                    <div className="loader border border-1">
                      <div class="spinner-box mx-auto">
                        <div class="pulse-container">
                          <div class="pulse-bubble pulse-bubble-1"></div>
                          <div class="pulse-bubble pulse-bubble-2"></div>
                          <div class="pulse-bubble pulse-bubble-3"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {AllProducts.map((v, i) => {
                    let btn = Wishlist.filter(
                      (wishProduct, i) => wishProduct.id == v.id
                    );

                    return (
                      <>
                        <div
                          className="col-3 m-2 card shadow-lg border-primary  border  rounded-4 p-3"
                          key={i}
                        >
                          <div className="border-primary border rounded-4 shadow-lg  ">
                            <img
                              src={v.thumbnail}
                              className="card-img-top"
                              style={{ height: "150px" }}
                              alt="..."
                            />
                            <div className="card-body">
                              <h5 className="card-title">{v.title}</h5>
                              <p className="card-text">{v.description}</p>
                              <Link
                                to={`/singleproductdetails/${v.id}/${v.category}`}
                                className="btn btn-primary shadow-lg "
                              >
                                Product Details
                              </Link>
                              <div className="my-2">
                                {btn == "" ? (
                                  <button
                                    className="btn btn-info shadow-lg"
                                    onClick={() => addtowishlist(v)}
                                  >
                                    {" "}
                                    Add to Wishlist{" "}
                                  </button>
                                ) : (
                                  <button
                                    className="btn btn-danger"
                                    onClick={() => removefromwishlist(v)}
                                  >
                                    {" "}
                                    Remove From Wishlist{" "}
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
