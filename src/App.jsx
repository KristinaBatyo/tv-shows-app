import { Routes, Route } from "react-router-dom";
import ShowList from "./components/list/ShowList";
import ShowDetails from "./components/details/ShowDetails";
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/details/:showId" element={<ShowDetails />} />
      </Routes>
    </Container>
  );
}

export default App
