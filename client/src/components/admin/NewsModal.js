import "./modal.css";

const NewsModal = ({ setNews }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setNews(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">News</h5>
          </div>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setNews(false)}>
                Delete
              </button>
              <button
                className="cancelBtn"
                onClick={() => setNews(false)}
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

export default NewsModal;