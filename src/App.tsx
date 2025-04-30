import './App.css'
import styled from "styled-components";
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main';
import { Projects } from './layout/sections/Projects';
import { Skills } from './layout/sections/Skills';



function App() {
    return (
        <div className="App">
        <Header />
        <Main />
        <Projects />
        <Skills Skillitem={""} />
        </div>
    )
}

export default App
