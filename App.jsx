import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Posts from './assets/Components/Posts'; // Import your Posts component
import SignUp from './assets/Components/Signup';
import Login from './assets/Components/Login';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/posts" element={<Posts />} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
