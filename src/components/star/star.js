import { StarIn, StarOut } from "./star.styles";

export const Star = ({ top }) => {
  console.log(top, "----------TOP---------");
  return (
    <>
      <StarOut top={top}>
        <StarIn />
      </StarOut>
    </>
  );
};
