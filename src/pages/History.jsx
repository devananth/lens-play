import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../custom-hooks";
import { Drawer, VideoCard } from "../components";
import { useHistory } from "../contexts";

const History = () => {
  useDocumentTitle("History | Lens-Play");

  const { history, removeEntireHistoryServerCall } = useHistory();
  const navigate = useNavigate();

  return (
    <>
      <main className="main__container">
        <Drawer />
        <section>
          <div className="d-flex space-bw align-center m-1 main__section--header">
            <h5 className="txt-bold">History</h5>
            <button
              className="btn btn-secondary"
              onClick={() => {
                removeEntireHistoryServerCall();
                navigate("/history");
              }}
            >
              Delete All
            </button>
          </div>
          <div className="grid-autofill-layout p-1">
            {history.length > 0 ? (
              history.map((video) => <VideoCard key={video._id} {...video} />)
            ) : (
              <h3 className="txt-bold">No videos found...</h3>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export { History };
