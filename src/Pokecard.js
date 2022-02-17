const Pokecard = (props) => (
    <div>
    <h1> {props.data.name} </h1>
    <p> <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`} /></p>
    <p> Type: {props.data.type} </p>
    <p> EXP: {props.data.base_experience} </p>
    </div>
)

export default Pokecard