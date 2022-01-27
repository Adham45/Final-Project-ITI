function Card(props) {
    console.log("PROPS",props)
    const {title, text, imgSrc} = props
    
    return (
        <div className="col">
            <div className="card border text-center pb-1">
                <div className='bg-white pt-4 pb-3 buttom-rounded'> 
                    <img src={imgSrc} className="card-img-top" alt="..." />
                    <h4 className='my-3'>{title}</h4>
                </div>
                <div className="card-body text-white small py-3 ">
                    <p className="card-text">{text}</p>
                    <a href='#' className='btn py-1 rounded-pill border-white fw-bold border-2'><small>READ MORE</small></a>
                </div>
            </div>
        </div>
    )
}

export default Card