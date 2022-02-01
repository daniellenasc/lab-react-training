import style from "./styles.module.css"

function BoxColor(props) {    
    
    return (
        <div className={style.container} style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </div>

    )
}

export default BoxColor