import Animal from "./Components/Animal";
import Greetings from "./Components/Greetings";

function App() {
  return (
    <div>
      <Greetings firstname="temp" age={10} />
      <Animal />
    </div>
  );
}

export default App;
