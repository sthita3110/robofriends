const Card = (props) => {
  return (
    <>
      <div
        className="card d-inline-block m-2 p-3 text-center bg-success-subtle border border-success-subtle border-1"
        style={{ width: 18 + "rem" }}
      >
        <img
          src={"https://robohash.org/" + props.id + "?size=200x200"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.email}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
