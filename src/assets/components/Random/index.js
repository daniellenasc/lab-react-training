import styles from "./styles.module.css"

function Random(props) {

    function getRandom(min, max) {
        let result = Math.floor(Math.random() * (max - min)) + min;
        return `Random value between ${min} and ${max} => ${result}`
    }



    return (
        <div className={styles.container}>
            <p>{getRandom(props.min, props.max)}</p>
        </div>
    )
}

export default Random