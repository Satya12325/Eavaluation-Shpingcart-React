export const Reducer = (state, action) => {
   
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((crntElm) => {
                return crntElm.id !== action.payload;
            }),
        };
    }
    if (action.type === "CLEAR_CART") {
        return { ...state, item: [] };
      }
      if(action.type === "INCREMENT"){
          const updateCart = state.item.map((crntElm) =>{
              if(crntElm.id === action.payload){
                  return {...crntElm, quantity: crntElm.quantity+1}
              }
              return crntElm; 
          });
          return { ...state, item: updateCart };
      }

      if(action.type === "DECREMENT"){
          const updateCart = state.item
          .map((crntElm) => {
              if(crntElm.id === action.payload){
                  return { ...crntElm, quantity: crntElm.quantity-1};
              }
              return crntElm;
          })
          .filter((crntElm) => crntElm.quantity !== 0 );
          return {...state, item: updateCart};
      }

      if(action.type === 'GET_TOTAL'){
          let {totalItem, totalAmount} = state.item.reduce(
              (accum, curVal) =>{
                let { price, quantity } = curVal;
                  
                let updateTotalAmount = price*quantity;
                accum.totalAmount += updateTotalAmount;
                accum.totalItem += quantity;
                return accum;
              } ,
              {
                  totalItem: 0,
                  totalAmount: 0,
              }

          );
          return {...state, totalItem, totalAmount}
      }
      return state;

}