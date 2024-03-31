import { Suspense } from "react";
import { lazy } from 'react';

import Loading from "./Loading";

const BooksLazy = lazy(()=> import('./Books'));

export default function BooksLazyLoading() {
  return (
    <Suspense fallback= {<Loading />}>
      <BooksLazy />
    </Suspense>
  )
}