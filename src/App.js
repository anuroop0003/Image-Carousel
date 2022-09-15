import { photos } from "./data/photos";
import Homepage from "./homepage";

function App() {
  return (
    <>
      <Homepage photos={photos} />
    </>
  );
}

export default App;
