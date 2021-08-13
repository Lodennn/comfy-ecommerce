// import React, { useReducer } from "react";

// const initialState = {
//   httpData: {},
//   data,
// };

// const httpReducer = (state, action) => {
//   if (action.type === "") return state;
// };

// const useHttp = () => {
//   const [data, httpDispatch] = useReducer(httpReducer, initialState);
//   dispatch(productsActions.requestStatus({ isLoading: true, error: null }));
//   const sendRequest = async (url, requestConfig) => {
//     try {
//       const response = await fetch(url, {
//         method: requestConfig.method ? requestConfig.method : "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestConfig.body ? requestConfig.body : null),
//       });
//       if (!response) throw new Error("Something went wrong!");
//       dispatch(
//         productsActions.requestStatus({ isLoading: false, error: null })
//       );
//       const data = await response.json();
//       return data;
//     } catch (err) {
//       throw err;
//     }
//   };
//   sendRequest()
//     .then((data) => {
//       dispatch(productsActions.addProducts(data));
//     })
//     .catch((err) =>
//       dispatch(
//         productsActions.requestStatus({ isLoading: false, error: err.message })
//       )
//     );
// };

// export default useHttp;
