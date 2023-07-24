import Navbar from './component/Navbar';
import BottomNavigation from './component/BottomNavigation';
import GlobalStyles from './styles/GlobalStyles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import { MainContainer } from './styles/Main.styles';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
      <GlobalStyles />
        <MainContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
        </MainContainer>
      <BottomNavigation />
    </div>
    </>
  );
};

export default App;
