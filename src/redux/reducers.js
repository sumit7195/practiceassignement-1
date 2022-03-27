const initalState = {
  loading: false,
  product: [],
  error: "",
};

const reducers = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_DATA":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case "PRODUCT_DETAIL":
      return {
        ...state,
        loading: false,
        product: [action.payload],
      };

    case "FETCH_USER_FAILURE":
      return {
        ...state,
        loading: false,
        product: [],
        error: action.payload,
      };

    case "SORT_BY_ASC":
      const newData = state.product.sort((a, b) => a.price - b.price);
      console.log(newData);
      return {
        ...state,
        product: [...newData],
      };

    case "SORT_BY_DSC":
      const desData = state.product.sort((a, b) => b.price - a.price);
      return {
        ...state,
        product: [...desData],
      };

    default:
      return { ...state };
  }
};

export default reducers;
