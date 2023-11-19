import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_HTTP_SERVER;

const initialState = {
  productList: [],
  isLoading: false,
  categoriesList: [],
  searchProductList: [],    
  filteredProductList: [],
};

// All Product List :
export const getProducts = createAsyncThunk("products", async (thunkAPI) => {
  try {
    let res = await fetch(`${apiUrl}/products`);
    let data = await res.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error });
  }
});

// All Category List :
export const getCategoryList = createAsyncThunk(
  "categoryList",
  async (thunkAPI) => {
    try {
      let res = await fetch(`${apiUrl}/products/categories`);
      let data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

// Filtered Product Lists :
export const getFilteredProducts = createAsyncThunk(
  "filterProducts",
  async (category, thunkAPI) => {
    try {
      let res = await fetch(`${apiUrl}/products/category/${category}`);
      let data = await res.json();
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

// Search Product Lists :
export const getSearchProducts = createAsyncThunk(
  "searchProducts",
  async (search, thunkAPI) => {
    try {
      let res = await fetch(`${apiUrl}/products/search?q=${search}`);
      let data = await res.json();
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Product List
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      })
      // Filtered Products :
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.filteredProductList = action.payload;
      })
      // Search Products :
      .addCase(getSearchProducts.fulfilled, (state, action) => {
        state.searchProductList = action.payload;
      })
      // Category List
      .addCase(getCategoryList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.categoriesList = action.payload;
        state.isLoading = false;
      })
      .addCase(getCategoryList.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
