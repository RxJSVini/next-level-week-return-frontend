import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Widget } from "../components/Widget";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Widget/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export { Router };