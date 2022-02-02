import {useState} from 'react';

import styles from "./styles.module.css"

function ClickablePicture(props) {
    const [src, setSrc] = useState(props.img)

    function handleImage() {
        if (src === props.img) {
            setSrc(props.imgClicked);
        } else {
            setSrc(props.img);
        }
    }



    return (        
        <img src={src} alt="pessoa" onClick={handleImage} className={styles.card}/>       
    )
}

export default ClickablePicture