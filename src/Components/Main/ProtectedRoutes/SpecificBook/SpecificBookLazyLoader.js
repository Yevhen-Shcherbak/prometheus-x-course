import { Suspense, useEffect, useState } from "react";
import { lazy } from 'react';
import { useParams } from "react-router-dom";
import { useContext } from "react";

import Loading from "../Books/Loading";
import BooksContext from "../../../../Context/BooksContext";
import NotFound from "../../NotFound";

const SpecificBookLazyLoading = lazy(()=> import('./SpecificBook'));

export default function SpecificBookLazyLoader() {

  const books = useContext(BooksContext);
  const {id} = useParams();
  const [matchedBook , setMatchedBook] = useState([]);
  useEffect(() => bookIDValidator(), [books, id]);

  const  bookIDValidator = () => {
    const match = books.filter((book) => book.id === +id)
    if (match.length != 0) { 
      return setMatchedBook(match[0]);  
    } else {
      return setMatchedBook([]);  
    }   
  }

  return (
    <>
      {matchedBook.length !== 0
      ? (<Suspense fallback= {<Loading/>}>
          <SpecificBookLazyLoading  bookData = {matchedBook} />
        </Suspense>)
      : (<NotFound/>)}
    </>
  ) 
}
