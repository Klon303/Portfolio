import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";
import { Particle } from "./components/particle/Particle";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Contact } from "./layout/sections/contacts/Contact";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Slogan } from "./layout/sections/slogan/Slogan";
import { Feedback } from "./layout/sections/feedback/Feedback";
import { Works } from "./layout/sections/works/Works";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Feedback />
      <Contact />
      <Slogan />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
