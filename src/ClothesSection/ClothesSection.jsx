import "./ClothesSection.css";
import ItemCard from "../components/ItemCard/ItemCard";

function ClothesSection({ onCardClick, clothingItems, weatherData }) {
  return (
    <div className="clothes-section">
      <div>
        <p>Your items</p>
        <button>+ Add New</button>
      </div>
      <ul className="cards__list">
        {clothingItems
          .filter((item) => {
            return weatherData && item.weather === weatherData.type;
          })
          .map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
      </ul>
    </div>
  );
}

export default ClothesSection;
