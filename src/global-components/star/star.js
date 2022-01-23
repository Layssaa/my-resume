import { StarIn, StarOut } from "./star.styles";

export const Star = ({ top }) => {
  return (
    <>
      <StarOut top={top}>
        <StarIn />
      </StarOut>
    </>
  );
};
