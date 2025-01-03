import React, { useEffect, useState } from "react";

import "./App.css";
import {
  coordinates,
  APIKey,
  defaultClothingItems,
} from "../../utils/constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTempUnit, setCurrentTempUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTempUnit === "C") setCurrentTempUnit("F");
    if (currentTempUnit === "F") setCurrentTempUnit("C");
  };

  useEffect(() => {
    getWeather(coordinates, APIKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  const handleAddItemSubmit = async (newItem) => {
    setIsLoading(true);
    try {
      const createdItem = await addItem({
        name: newItem.name,
        imageUrl: newItem.imageUrl,
        weather: newItem.weather.toLowerCase(),
      });
      setClothingItems((prevItems) => [createdItem, ...prevItems]);
      closeActiveModal();
    } catch (err) {
      console.error("Error adding item:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page">
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>

        <AddItemModal
          isOpen={activeModal}
          onAddItem={handleAddItemSubmit}
          closeActiveModal={closeActiveModal}
          isLoading={isLoading}
        />

        <ItemModal
          isOpen={activeModal}
          card={selectedCard}
          closeActiveModal={closeActiveModal}
        />
      </CurrentTempUnitContext.Provider>
    </div>
  );
}

export default App;
