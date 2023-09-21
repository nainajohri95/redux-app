import "./App.css";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import CreateNotes from "./Components/notes/CreateNotes";
import ListNotes from "./Components/notes/ListNotes";

function App() {
  return (
    <div className="App">
      {/* <Child1 />
      <Child2 /> */}
      <CreateNotes />
      <ListNotes />
    </div>
  );
}

export default App;
