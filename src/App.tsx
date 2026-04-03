import "./App.css";
import { OwnerAndBooks } from "./components/OwnerAndBooks/OwnerAndBooks";
import { ownerAndBooksFixture } from "./components/OwnerAndBooks/OwnerAndBooks.fixture";

function App() {
  return (
    <>
      <OwnerAndBooks {...ownerAndBooksFixture} />
    </>
  );
}

export default App;
