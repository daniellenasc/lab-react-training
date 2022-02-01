import styles from "./styles.module.css"

function Greetings(props) {    
    
    function Saudacao (lang, name) {        
        if (lang === 'de'){
           return `Hallo ${name}`;
        } else if (lang === 'en'){
            return `Hello ${name}`;
        } else if (lang === 'es') {
            return `Holla ${name}`;
        } else if (lang === 'fr') {
            return `Bonjour ${name}`;
        };
    }
   

    return (   
        <div className={styles.container}>     
            <p >{Saudacao(props.lang, props.children)}</p>
        </div>       
    )
}

export default Greetings