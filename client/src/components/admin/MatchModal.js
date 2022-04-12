import "./modal.css";

const MatchModal = ({ setMatch }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setMatch(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Matches</h5>
          </div>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setMatch(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setMatch(false)}
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

export default MatchModal;