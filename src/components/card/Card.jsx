// CSS Imports
import "./Card.css";

const Card = ({ title, description, content }) => {
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      <div className="card-desc">{description}</div>
      <div className="card-content">{content()}</div>
    </div>
  );
};

export default Card;
