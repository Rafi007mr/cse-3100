import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      {/* Character image */}
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        {/* Character name and details */}
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        {/* Link to character details page */}
        <Link to={`/character/${character.id}`} className="btn btn-primary">
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
}