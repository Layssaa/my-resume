import { useEffect } from "react";
import { Star } from "../star/star.js";
import { Background } from "./background.styles.js";

export const BackgroundContainer = () => {
  let randomArray = [];
  let count = 1;

  const randomTop = async () => {
    if (randomArray.length >= 6) {
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

    randomArray.push(randomNumber);
    randomTop();
  };

  useEffect(() => {
    randomTop();
  }, []);

  // if (randomArray.length === 0) return <Background />;

  return (
    <Background>
      {/* {randomArray.map((element) => {
        console.log("valor do top: " + element);
        return <Star top={element} />;
      })} */}

      <Star top={10} />
      <Star top={50} />
      <Star top={75} />
      <Star top={90} />
      <Star top={20} />
    </Background>
  );
};
