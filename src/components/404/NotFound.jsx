import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="d-flex xy-center col">
        <span className="txt-3xl txt-bold m-1">
          Sorry, the page you requested is not found{" "}
        </span>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </section>
    </>
  );
};
export { NotFound };
