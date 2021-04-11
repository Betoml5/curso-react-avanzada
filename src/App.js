import React from "react";

import { Logo } from "./components/Logo/index";

import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Router } from '@reach/router'
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";



export const App = () => {
  return (
    <>
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <NavBar />


    </>
  )
}

