import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {

      category: "Processor",
      Image: "https://i.ibb.co/grPdckH/Laptop.png",
      products: []
    },
    {

      category: "Motherboard",
      Image: "https://i.ibb.co/s5pvhgr/GPU.png",
      products: []
    },
    {

      category: "RAM",
      Image: "https://i.ibb.co/1L2879z/all-in-one.png",
      products: []
    },
    {

      category: "Storage Device",
      Image: "https://i.ibb.co/NrfbsyX/software.png",
      products: []
    },
    {

      category: "Monitor",
      Image: "https://i.ibb.co/dKffhHM/Monitor.png",
      products: []
    },
    {

      category: "Others",
      Image: "https://i.ibb.co/YtRdr22/camera.png",
      products: []
    }

  ]

}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      const { category, product } = action.payload;
      const categoryIndex = state.products.findIndex((item) => item.category === category);

      if (categoryIndex !== -1) {
        const existingProductIndex = state.products[categoryIndex].products.findIndex(
          (item) => item.productId === product.productId
        );

        if (existingProductIndex !== -1) {
          // If the product already exists, replace it with the selected product
          state.products[categoryIndex].products[existingProductIndex] = product;
        } else {
          // If the product doesn't exist, add it to the products array
          state.products[categoryIndex].products.push(product);
        }
      }
    },
  },
});




export const { addToBuilder } = productSlice.actions;
export default productSlice.reducer;