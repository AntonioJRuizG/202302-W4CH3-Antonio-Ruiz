import { mockCharacters } from "../../mocks/characters";
import { Adviser } from "../../models/adviser";
import { Fighter } from "../../models/fighter";
import { King } from "../../models/king";
import { Squire } from "../../models/squire";

export function Card() {
  return (
    <ul className="characters-list row list-unstyled">
      {mockCharacters.map((item, x) => (
        <li key={x} className="character col">
          <div className="card character__card">
            <img
              src={"../images/" + item.name.toLowerCase() + ".jpg"}
              alt={item.name + item.family}
              className="character__picture card-img-top"
            />
            <div className="card-body">
              <h2 className="character__name card-title h4">
                {item.name + " " + item.family}
              </h2>
              <div className="character__info">
                <ul className="list-unstyled">
                  <li>Edad: {item.age} años</li>
                  <li>
                    Estado:
                    {item.isLive ? (
                      <i className="fas fa-thumbs-up"></i>
                    ) : (
                      <i className="fas fa-thumbs-down"></i>
                    )}
                  </li>
                </ul>
              </div>
              <div className="character__overlay">
                <ul className="list-unstyled">
                  {item instanceof King && (
                    <li> Años de reinado: {item.reignLength}</li>
                  )}
                  {item instanceof Fighter && <li> Destreza: {item.skills}</li>}
                  {item instanceof Fighter && <li> Arma: {item.weapon}</li>}
                  {item instanceof Squire && <li> Sirve a: {item.servesTo}</li>}
                  {item instanceof Adviser && (
                    <li>
                      Asesora a: {item.helpsTo.name + " " + item.helpsTo.family}
                    </li>
                  )}
                  {item instanceof Squire && <li> Sirve a: {item.peloteo}</li>}
                </ul>
                <div className="character__actions">
                  <button className="character__action btn">habla</button>
                  <button className="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i className="emoji"></i>
          </div>
        </li>
      ))}
    </ul>
  );
}
