
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Story from './components/Story';
import PersonalStory from './components/PersonalStory';

function App() {
  return (
    <Router basename="/valentine2k26">
      <Routes>
        <Route path="/" element={<Story />} />
        <Route path="/our-story" element={<PersonalStory />} />
      </Routes>
    </Router>
  );
}

export default App;
