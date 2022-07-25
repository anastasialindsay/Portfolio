import "./card.styles.css";

const Card = ({ employee }) => {
  const { id, name, email, phone } = employee;

  return (
    <div className="card-container" key={id}>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default Card;
