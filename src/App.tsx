import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {About} from "./layout/section/about/About";
import {Skills} from "./layout/section/skills/Skills";
import {Portfolio} from "./layout/section/portfolio/Portfolio";
import {Contacts} from "./layout/section/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
