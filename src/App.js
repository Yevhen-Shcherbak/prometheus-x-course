import React, { useEffect, useState } from 'react';
import { 
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import RootLayout from './Components/RootLayout';
import Redirect from './Components/Redirect';
import SignIn from './Components/Main/SignIn';
import ProtectedRoute from './Components/Main/ProtectedRoutes/ProtectedRoute';
import BooksLazyLoading from './Components/Main/ProtectedRoutes/Books/BooksLazyLoading';
import Cart from './Components/Main/ProtectedRoutes/Cart/Cart';
import NotFound from './Components/Main/NotFound';
import SpecificBookLazyLoader from './Components/Main/ProtectedRoutes/SpecificBook/SpecificBookLazyLoader';

import SignedInContext from './Context/SignedInContext';
import BooksContext from './Context/BooksContext';
import CartContext from './Context/CartContext';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path= "/" element= {<RootLayout />}>
      <Route  path="" element= {<Redirect />} />
      <Route  path= "signin" element= {<SignIn />} />
      <Route element= {<ProtectedRoute/>}>
        <Route  path="books">
          <Route index element= {<BooksLazyLoading />} />
          <Route 
            path=":id" 
            element= {<SpecificBookLazyLoader/>}
          />
        </Route>         
        <Route  path="cart" element= {<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route> 
  )
)

function App() {

  const [signedIn, setSignedIn] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => { async function getData() {
    await fetch("./books.json",
      {headers: 
        {'Content-Type': 'application/json','Accept': 'application/json'}
    })
    .then((res) => res.json())
    .then(data => setFetchedData(data.books))
    .catch((err) => console.log('fetch failed'));
    }; getData() }, []);

  useEffect(() => {
    if (localStorage.cart) {
      setCartData(JSON.parse(localStorage.getItem('cart')));
    } else {
      setCartData([]);
    }
  }, [])
  
  return ( 
    <CartContext.Provider value= {{cartData, setCartData}}>
      <SignedInContext.Provider value= {[signedIn, setSignedIn]}>   
        <BooksContext.Provider value = {fetchedData}>
          <RouterProvider router= {router}/>
        </BooksContext.Provider>        
      </SignedInContext.Provider>
    </CartContext.Provider>  
  );
}

export default App;