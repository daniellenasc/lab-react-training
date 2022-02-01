import './App.module.css';
import IdCard from "../src/assets/components/IdCard"
import ImageOne from "./assets/images/maxence.png"
import Greetings from "../src/assets/components/Greetings"
import Random from "../src/assets/components/Random"

function App() {
  return (
    <div className="App">
      
      <div>
        <h1> IdCard </h1>
        <IdCard picture={ImageOne} firstName="José" lastName="da Silva" gender="male" heigth={182} birth={new Date("1992-07-14")} />
        <IdCard picture={ImageOne} firstName="Otávio" lastName="Rodrigues" gender="male" heigth={178} birth={new Date("1987-10-02")} />
      </div>

      <div>
        <h1> Greetings </h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>        
      </div>

      <div>
        <h1> Random </h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>       
      </div>

    </div>
  );
}

export default App;
