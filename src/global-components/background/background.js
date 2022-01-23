import { useEffect, useState } from "react";
import { Astronaut } from "../astronaut/astronaut.styles.js";
import { Star } from "../star/star.js";
import { Background } from "./background.styles.js";

export const BackgroundContainer = () => {
  const [randomArray, setRandomArray] = useState([]);

  const randomTop = async () => {
    if (randomArray.length === 6) {
      return;
    }

    let randomNumber = Math.random() * 100;
    const existVerify = await randomArray.find(randomFind);

    if (existVerify) {
      randomNumber = Math.random() * 100;
    }

    function randomFind(_number) {
      return _number === randomNumber;
    }

    setRandomArray((prevState) => [...prevState, randomNumber]);

    // randomTop();
  };

  useEffect(() => {
    randomTop();
  }, []);

  if (randomArray.length === 0) return <Background />;

  return (
    <Background>
      {/* {randomArray.map((element) => {
        return <Star key={element} top={element} />;
      })} */}

    </Background>
  );
};
