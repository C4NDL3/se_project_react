import "./ItemModal.css";

function ItemModal({ isOpen, closeActiveModal, card, handleDeleteItem }) {
  return (
    <div className={`modal ${isOpen === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
        <button
          className="garment__delete"
          onClick={() => handleDeleteItem(card._id)}
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
