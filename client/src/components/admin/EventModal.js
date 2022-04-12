import "./modal.css";

const EventModal = ({ setEvent }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setEvent(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Events</h5>
          </div>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setEvent(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setEvent(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventModal;