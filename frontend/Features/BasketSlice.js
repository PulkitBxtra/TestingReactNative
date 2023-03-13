import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items=[...state.items,action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      let newBasket = [...state.items];

      if(index<=0){
        newBasket.splice(index, 1);
      }
      else{
        console.warn(`can't remove product id: (${action.payload.id}) as it is not in your basket`);
      }

      state.items= newBasket;
    },
    
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state,id) =>
    state.basket.items.filter((item) => item.id === id);
    

export default basketSlice.reducer