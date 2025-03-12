import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  closeActiveModal,
  onSubmit,
  disableButton,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button
            onClick={closeActiveModal}
            type="button"
            className="modal__close"
          ></button>

          <button
            type="submit"
            // className="modal__submit"
            className={`modal__submit ${
              disableButton ? "modal__submit-disabled" : " "
            }`}
            disabled={disableButton}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
