import './App.css';
import PageHeader from './components/SectionHeader/PageHeader';
import Intro from './components/SectionIntro/Intro';
import CarouselBS from './components/SectionCarousel/CarouselBS';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Intro/>
      <CarouselBS/>
    </div>
  );
}

export default App;
