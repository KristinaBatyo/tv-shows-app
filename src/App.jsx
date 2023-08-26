import { Routes, Route } from "react-router-dom";
import ShowList from "./components/list/ShowList";
import ShowDetails from "./components/details/ShowDetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:showId" element={<ShowDetails />} />
      </Routes>
  );
}

export default App
