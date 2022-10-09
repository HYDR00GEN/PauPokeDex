import Card from "./Card";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(() => ({
  capturedDiv: {
    display: "flex",
    justifyContent: "center",
  },
}));
export const Captured = ({ captList, captureHandler }) => {
  const classes = useStyles();
  return (
    <>
      {captList != 0 ? (
        <div className={classes.capturedDiv}>
          {captList.map((i) => (
            <Card
              key={i.name}
              id={i.id}
              name={i.name}
              img={i.sprites.other.dream_world.front_default}
              type1={i.types[0].type.name}
              type2={i?.types[1]?.type.name}
              onCapture={() => captureHandler(i)}
              captureList={captList.some((p) => p.name === i.name)}
            />
          ))}
        </div>
      ) : (
        <div>nothing captured</div>
      )}
    </>
  );
};
