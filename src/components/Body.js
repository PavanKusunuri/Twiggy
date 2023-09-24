import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.0005383&lng=81.8040345&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  console.log(res);

  if (res.length === 0) {
    console.log(res);
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(res);
              const filteredList = res.filter((data) =>
                data.info.name.includes(searchValue)
              );
              setFilteredList(filteredList);
              console.log(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = res.filter((rest) => rest.info.avgRating > 4);
            setRes(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="restaurant-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
