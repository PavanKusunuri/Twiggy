import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';

const Body = () => {

    const [res, setRes] = useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.0005383&lng=81.8040345&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(res.length === 0){
        return <Shimmer />
    }

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