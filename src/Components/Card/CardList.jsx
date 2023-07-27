import Card from "./Card";

const Cardlist = (props) => {
  return (
    <>
      <div>
        {props.robots.map((ele, index, arr) => (
          <Card
            id={ele.id}
            name={ele.name}
            username={ele.username}
            email={ele.email}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default Cardlist;
