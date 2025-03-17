import Index from "./components/index";
import Nav from "./components/nav";
import Footer from "./components/footer";
import ScrollToTop from "./components/resetStart";
import {HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" exact element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
