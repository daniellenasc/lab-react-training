import './App.module.css';
import IdCard from "../src/assets/components/IdCard"
import ImageOne from "./assets/images/maxence.png"
import Greetings from "../src/assets/components/Greetings"
import Random from "../src/assets/components/Random"
import BoxColor from "../src/assets/components/BoxColor"

import Rating from "../src/assets/components/Rating"

import ClickablePicture from "../src/assets/components/ClickablePicture"
import Pessoa from "../src/assets/images/maxence.png"
import PessoaOculos from "../src/assets/images/maxence-glasses.png"


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

      <div>
        <h1> BoxColor </h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div>
        <h1> Rating </h1>
        <Rating>0</Rating>       
        <Rating>1.49</Rating>        
        <Rating>1.5</Rating>        
        <Rating>3</Rating>        
        <Rating>4</Rating>        
        <Rating>5</Rating>  
      </div>

      <div>
        <h1> ClickablePicture </h1>
        <ClickablePicture
          img={Pessoa}
          imgClicked={PessoaOculos}
        />
        
      </div>

      
      


    </div>
  );
}

export default App;
