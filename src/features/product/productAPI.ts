import { createAsyncThunk } from '@reduxjs/toolkit';
import Product  from '../../models/product';
import { api } from '../api/axios';



export const getProduct = createAsyncThunk(
  "product/getProduct",
  
  async (dispatch, thunkApi) => {
    try {
      //@ts-ignore
      const {data}= await api.get<Product[]>('/products');
   return data;
     
    } catch (error: any) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);


