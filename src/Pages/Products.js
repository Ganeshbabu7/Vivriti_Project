import React, { useEffect, useState } from "react";
import NavBar from "../CommonComponents/NavBar";
import Footer from "../CommonComponents/Footer";
import { useSelector, useDispatch } from "react-redux";
import SelectField from "../CommonComponents/SelectField";
import CardComponent from "../CommonComponents/CardComponent";
import {
  getProducts,
  getCategoryList,
  getSearchProducts,
  getFilteredProducts,
} from "../Redux/createReducer";

function Products() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  console.log("category: ", category);
  const {
    isLoading,
    productList,
    categoriesList,
    searchProductList,
    filteredProductList,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategoryList());
  }, []);

  useEffect(() => {
    dispatch(getFilteredProducts(category));
  }, [category]);

  useEffect(() => {
    dispatch(getSearchProducts(search));
  }, [search]);

  return (
    <div>
      <div className="px-10">
        <NavBar setSearch={setSearch} />
        <SelectField option={categoriesList} setCategory={setCategory} />
        <CardComponent
          product={
            filteredProductList?.products?.length > 0
              ? filteredProductList.products
              : searchProductList?.products?.length > 0
              ? searchProductList.products
              : productList.products
          }
          isLoading={isLoading}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
