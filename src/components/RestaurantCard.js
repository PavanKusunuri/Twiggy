const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-card">
      <img
        className="res-food-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"
        alt="res-food-image"
      />
      <h3>{resData.info.name}</h3>
      <h4> {resData.info.cuisines}</h4>
      <h4> {resData.info.avgRating} Stars</h4>
      <h4> {resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;