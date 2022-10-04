import DropDownMenu from "./components/DropDownMenu";
import "./css/app.css";

function App() {
  return (
    <>
      <div className="head-text">Pokedex Init</div>
      <input type="text" placeholder="find pokemon"></input>
      <DropDownMenu />
      <div className="container">
        <div className="pokelist">
          <div>Card</div>
          <div>Card</div>
        </div>
        <div className="captured-bucket">
          <div>captured n1</div>
          <div>captured n2</div>
          <div>captured n3</div>
        </div>
      </div>
    </>
  );
}

export default App;
