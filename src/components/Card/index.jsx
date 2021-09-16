import "./style.css";
const Card = ({ result: { name, description, message, owner } }) => {
  return (
    <>
      <div>
        {message === "Not Found" ? (
          <h2>Nada encontrado</h2>
        ) : (
          <div className="genCard">
            <img src={owner.avatar_url} alt={name} />
            <h3>{name}</h3>
            <h4>{description}</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
