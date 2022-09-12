import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from './features/counter/counterSlice';
import productSlice from '../features/product/productSlice';
import cartSlice from '../features/cart/cartSlice';
import  authSlice  from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart:cartSlice,
    auth:authSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
