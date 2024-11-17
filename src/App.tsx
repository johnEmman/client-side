import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import MockCall from "./pages/MockCall";
import RoomPage from "./components/RoomPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="test" element={<TestPage />} />

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
