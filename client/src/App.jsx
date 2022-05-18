import Clock from "./components/Clock";
import CounterFeature from "./components/Count";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>welcome to my site</h1>
      <Clock />
      <Router>
        <Routes>
        <Route path="/count" element={<CounterFeature/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
