
function Rating (props) {

    const numbersOfStars = Math.round(props.children);
    let star = "★";
    star = star.repeat(numbersOfStars).padEnd(5, '☆');
    
    return <p>{star}</p>

}

export default Rating