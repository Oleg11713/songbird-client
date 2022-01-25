import React from "react";
import { useSelector } from "react-redux";

import AudioPlayer from "../audio";
import { selectSelectedBird } from "../../redux/birds/selectors";

import "./styles.scss";

const Description = () => {
  const selectedBird = useSelector(selectSelectedBird);

  return (
    <div className="description">
      {selectedBird ? (
        <div className="bird-description">
          <div className="bird-info">
            <img src={`${selectedBird.image}`} className="image" alt="bird" />
            <div className="name-species-audio">
              <div className="name">{selectedBird.name}</div>
              <div className="species">{selectedBird.species}</div>
              <AudioPlayer audio={selectedBird.audio} />
            </div>
          </div>
          <p className="bird-description">{selectedBird.description}</p>
        </div>
      ) : (
        <p>
          Послушайте плеер.
          <br />
          Выберите птицу из списка
        </p>
      )}
    </div>
  );
};

export default Description;
