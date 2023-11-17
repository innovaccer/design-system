// import React, { useState, useEffect, useContext } from 'react';

// // Create a context to hold the state
// const StoreContext = React.createContext({});

// // Custom hook to use the store
// export const useStore = () => {
//   const context = useContext(StoreContext);
//   if (!context) {
//     throw new Error('useStore must be used within a StoreProvider');
//   }
//   return context;
// };

// // Provider component to wrap your app and provide the store
// export const StoreProvider = ({ children }) => {
//   const [store, setStore] = useState({
//     counter: 0,
//     // Add other properties to your store as needed
//   });

//   // Save the store to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('appStore', JSON.stringify(store));
//   }, [store]);

//   // Increment counter action
//   const incrementCounter = () => {
//     setStore((prevStore) => ({
//       ...prevStore,
//       counter: prevStore.counter + 1,
//     }));
//   };

//   // Decrement counter action
//   const decrementCounter = () => {
//     setStore((prevStore) => ({
//       ...prevStore,
//       counter: prevStore.counter - 1,
//     }));
//   };

//   // Reset counter action
//   const resetCounter = () => {
//     setStore((prevStore) => ({
//       ...prevStore,
//       counter: 0,
//     }));
//   };

//   // Expose the store and actions
//   const storeValue = {
//     store,
//     incrementCounter,
//     decrementCounter,
//     resetCounter,
//   };

//   return <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>;
// };
