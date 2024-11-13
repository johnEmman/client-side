import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import MockCall from "./pages/MockCall";
import RoomPage from "./components/RoomPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="mockcall" element={<MockCall />}>
            {/* Define the room route relative to /mockcall */}
            <Route path="room/:roomId" element={<RoomPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
