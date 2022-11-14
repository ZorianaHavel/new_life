import './Characters.css';

function Characters(props) {
    let { name, desk, picture } = props;

    return (

        <div>
            <h2 className={'target'}> {name}</h2>
            <p>{desk}</p>
            <img src={picture} alt="" />
        </div>
    )
}
export default Characters;