import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlaylistsPage from "./pages/PlaylistsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/playlists" element={<PlaylistsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
