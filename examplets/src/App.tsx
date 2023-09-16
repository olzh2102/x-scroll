import "./App.css";
import Scroller from "./component";

function App() {
  return (
    <div style={{ width: "1920px", height: "2000px" }}>
      <Scroller>
        <div className="page page-1" />
        <div className="page page-2" />
      </Scroller>
    </div>
  );
}

export default App;
