import React from "react";
import ReactDOM from "react-dom"


const heading = React.createElement("div", {id: "parent"}, 
[
    React.createElement("div", {id: "child"}, "This is First child"),
    React.createElement("div", {id: "child"}, "This is Second child 2")
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading);