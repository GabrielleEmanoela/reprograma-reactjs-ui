import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../page/index";

export default function Routes() {
  return (
    <BrowserRouter>
    <Route path="/" component={Main}></Route>
    </BrowserRouter>
  );
}
