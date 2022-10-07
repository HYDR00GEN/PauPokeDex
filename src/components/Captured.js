import Card from "./Card";
export const Captured = ({ captList, captureHandler }) => {
  return (
    <>
      {captList != 0 ? (
        <div className="captured-div" style={{ display: "flex" }}>
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
