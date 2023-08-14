const heading = React.createElement("div", {id: "parent"}, 
[
    React.createElement("div", {id: "child"}, "This is child"),
    React.createElement("div", {id: "child"}, "This is child 2")
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading);