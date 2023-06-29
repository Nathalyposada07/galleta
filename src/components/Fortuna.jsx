const Fortuna = (props, backgroundImg) => {
    const { phrase, author } = props.data;

    return (
        
        <article>
            <h1 className="title">GALLETAS DE LA FORTUNA</h1>
            <div className="card">
                <p>{phrase}</p>
            </div>
            <div className="cardAuthor">
                <p>{author}</p>
            </div>
        </article>
    )
}


export default Fortuna;