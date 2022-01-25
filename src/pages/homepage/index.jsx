import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CurrentQuestion from "../../components/currentQuestion";
import AnswerArea from "../../components/answerArea";
import ButtonNext from "../../components/buttonNext";
import { selectLevel } from "../../redux/progress/selectors";
import { selectBirds } from "../../redux/birds/selectors";
import { fetchBirds } from "../../http/birdAPI";
import { setBirds, setSelectedBird } from "../../redux/birds/actions";
import { Spinner } from "react-bootstrap";

const Homepage = () => {
  const NUMBER_OF_BIRDS_PER_LEVEL = 6;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const level = useSelector(selectLevel) - 1;
  const birds = useSelector(selectBirds);
  const birdsPerLevel = [];

  useEffect(() => {
    fetchBirds()
      .then((data) => {
        dispatch(setBirds(data));
        dispatch(setSelectedBird(null));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  const start = level * NUMBER_OF_BIRDS_PER_LEVEL;
  const end = start + NUMBER_OF_BIRDS_PER_LEVEL;

  for (let i = start; i < end; i++) {
    birdsPerLevel.push(birds[i]);
  }

  const currentBird =
    birdsPerLevel[Math.floor(Math.random() * NUMBER_OF_BIRDS_PER_LEVEL)];

  return (
    <div>
      <CurrentQuestion
        name={currentBird.name}
        audio={currentBird.audio}
        image={currentBird.image}
      />
      <AnswerArea birds={birdsPerLevel} currentBird={currentBird} />
      <ButtonNext />
    </div>
  );
};

export default Homepage;
