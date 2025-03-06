// App.js
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './pages/Header.tsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <Router>
        <Header />
        <Projects />
    </Router>
  );
}
export default App;
