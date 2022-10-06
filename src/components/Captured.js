import Card from "./Card";
export const Captured = ({
  id,
  name,
  img,
  type1,
  type2,
  onCapture,
  captureList,
  captList,
  captureHandler,
}) => {
  return (
    <>
      {captList != 0 ? (
        <div className="captured-div">
          {captList.map((i) => (
            <Card
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
