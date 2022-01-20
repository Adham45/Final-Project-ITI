// import "../assets/news.css"

function News (){

    return(
        <section>
            <div className="container py-5 mb-5">
            <div className="title mb-4">
                    <h2>
                        Lates News
                    </h2>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={require("./images/news1.jpg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Recycling Technologies</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={require("./images/news2.jpeg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">How To Recycle</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={require("./images/news3.jpg")} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Recycling As Daily Routine</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default News;