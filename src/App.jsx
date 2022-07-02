
import './App.scss';
import Intro from './components/intro/Intro';
import Topbar from './components/topbar/Topbar';
import Work from './components/works/Work';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
