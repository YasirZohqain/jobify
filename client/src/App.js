import Landing from "./pages/Landing";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Dashboard</>}  />
          <Route path="/" element={<>Login</>}  />
          <Route path="/Landing0" element={<Landing/>}  />
          <Route path="*" element={<>Error</>}  />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
