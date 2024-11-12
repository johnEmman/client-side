import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import MeetingRoom from "./pages/MeetingRoom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/meetingroom" element={<MeetingRoom />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Fallback for unmatched routes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
