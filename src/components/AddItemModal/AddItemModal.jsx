import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ closeActiveModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImgUrlChange = (e) => {
    setImgUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onAddItem({ name, imageUrl, weather });
  };

  useEffect(() => {
    setIsValid(name.trim() !== "" && imageUrl.trim() !== "" && weather !== "");
  }, [name, imageUrl, weather]);

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImgUrl("");
      setWeather("");
      setIsValid(false);
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      disableButton={!isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={imageUrl}
          onChange={handleImgUrlChange}
          required
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type: </legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="radioButton"
            value="hot"
            checked={weather === "hot"}
            onChange={handleWeatherChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="radioButton"
            value="warm"
            checked={weather === "warm"}
            onChange={handleWeatherChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="radioButton"
            value="cold"
            checked={weather === "cold"}
            onChange={handleWeatherChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
