import './App.css';
import PageHeader from './components/SectionHeader/PageHeader';
import Intro from './components/SectionIntro/Intro';
import CarouselBS from './components/SectionCarousel/CarouselBS';
import ServicesGrid from './components/SectionGrid/ServicesGrid';
import About from './components/SectionAbout/About';
import FooterInfo from './components/SectionFooter/FooterInfo';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Intro/>
      <CarouselBS/>
      <ServicesGrid/>
      <About/>
      <FooterInfo/>
    </div>
  );
}

export default App;
