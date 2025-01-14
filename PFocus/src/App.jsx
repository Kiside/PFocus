import './App.css'
import TimerContainer from './components/containers/TimerContainer.jsx';
import {BackgroundProvider, useBackground} from "./components/contexts/BackgroundContext.jsx";
import {useEffect} from "react";

function App() {

  return (
    <BackgroundProvider>
        <MainAppContent/>
    </BackgroundProvider>
  );
}

function MainAppContent() {
    const { background } = useBackground();

    useEffect(() => {
        if(background){
            document.body.classList.add("background");
            document.body.style.setProperty("--background-image", `url(${background}`);
        }
        else {
            document.body.classList.remove("background");
            document.body.style.removeProperty("--background-image");
        }
    }, [background]);

    return <div className="mainContainer">
        <TimerContainer/>
        <div><button>Bottone</button></div>
        </div>;
}

export default App
