
export default function Project({name, desc}) {
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{desc}</p>
            <div className="squiggle"></div>
        </div>
    );
}