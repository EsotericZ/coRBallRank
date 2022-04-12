import "./modal.css";

const PlayerModal = ({ setPlayer }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setPlayer(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Players</h5>
          </div>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setPlayer(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setPlayer(false)}
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

export default PlayerModal;