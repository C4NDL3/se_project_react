import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  onCardClick,
  clothingItems,
  weatherData,
  handleAddClick,
}) {
  return (
    <div className="clothes-section">
      <div>
        <p className="your__items">Your items</p>
        <button className="clothes__btn" onClick={handleAddClick}>
          + Add New
        </button>
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
