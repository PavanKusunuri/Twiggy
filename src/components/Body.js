import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {

    const [res, setRes] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = res.filter((rest)=> rest.info.avgRating > 4);
                    setRes(filteredList);
                }}>
                    Top Rated Restuarants
                </button>
            </div>
            <div className="search">Search</div>
            <div className="restaurant-container">
               { res.map((restaurant)=> (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
               ))}
            </div>
        </div>
    )
}

export default Body;