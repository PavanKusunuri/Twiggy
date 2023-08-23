import React from "react";
import ReactDOM from "react-dom"

// React Element
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8qISnbBjCao_dLCpPlz-bNNx5rixQfvVgA&usqp=CAU" alt="logo
                "/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {/* Restaurant card */}
                <RestaurantCard />
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
     <div className="res-card">
        <h3>Meghana Foods</h3>
     </div>
    )
}


const AppLayout = () =>  {
    return (
<div className="app">
<Header />
<Body />
</div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)