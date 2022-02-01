import styles from "./styles.module.css";

function IdCard(props) {
    return (        
        <div className={styles.card}>
            <section>
                <img src={props.picture} alt={props.alt} /> 
            </section> 
            <section className={styles.text}>
                <p><b>First name:</b> {props.firstName} </p>
                <p><b>Last name:</b> {props.lastName} </p>
                <p><b>Gender:</b> {props.gender} </p>
                <p><b>Heigth:</b> {props.heigth} </p>
                <p><b>Birth:</b> {props.birth.toLocaleString()} </p>
            </section>
        </div>
        
    )
}

export default IdCard
 