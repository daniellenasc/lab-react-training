import { useState } from "react";
import styles from "./styles.module.css"

function LikeButton() {
    const [counter, setCounter] = useState(0);

    const colors = ['purple','blue','green','yellow','orange','red'];
    const [color, setColor] = useState(colors[0])
    
    function handleClick() {
        setCounter(counter + 1);
        setColor(colors[Math.floor(Math.random() * (colors.length - 1))])    
        console.log(Math.random() * (colors.length - 1))    
      }

    return <button className={styles.btnLike} type="button" onClick={handleClick} style={{backgroundColor: color}}> {counter} Likes</button>
}

export default LikeButton