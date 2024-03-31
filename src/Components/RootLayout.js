import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Header from "./Head/Header";
import Footer from "./Foot/Footer";
import Loading from "./Main/ProtectedRoutes/Books/Loading";

export default function RootLayout () {
    
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main">
      <Suspense fallback={<Loading />}>
        <Outlet /> 
      </Suspense>               
      </main>
      <Footer />
    </div>
  )
}