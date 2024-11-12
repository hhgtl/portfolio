import './App.css';
import sprite from '../src/asests/img/sprite.svg';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Projects } from './layout/section/projects/Projects';
import { Contact } from './layout/section/contact/Contact';
import { Footer } from './layout/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
