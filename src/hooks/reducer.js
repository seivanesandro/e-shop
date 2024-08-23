// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
    basket: []
};

//Selector

export const getBasketTotal = basket => {
    return basket?.reduce(
        (amount, item) => item.price + amount,
        0
    );
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            const uniqueBasket = new Set([
                ...state.basket,
                action.item
            ]); // Create a Set with unique elements
            return {
                ...state,
                basket: Array.from(uniqueBasket) // Convert Set back to an array
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                basketItem =>
                    basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                );
            }

            return {
                ...state,
                basket: newBasket
            };

        default:
            return state;
    }
};

export default reducer;
