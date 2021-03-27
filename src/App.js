import React from "react";

import { Logo } from "./components/Logo/index";

import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Home } from "./pages/Home";
import { Router } from '@reach/router'



export const App = () => {

  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail');

  return (
    <>
      <Logo />
      {
        detailId ? <PhotoCardWithQuery id={detailId} />
          :
          <Router>
            <Home path="/" />
            <Home path="/pet/:id" />
          </Router>
      }

    </>
  )
}

