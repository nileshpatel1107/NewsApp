
import React from 'react'
const Ncomponent = (props) => {



    return (
        <div className="container my-3 mx-3">
            <div className="card" style={{ width: "18rem" }}>
                <img src={!props.url ? "https://cdn.shopify.com/s/files/1/1260/4809/products/8030-BL-NM-2.jpeg?v=1624806585" : props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.discription}</p>
                    <div className="card-footer text-muted my-3"> {!props.author ? ' ' : `By ${props.author}`} days ago At {new Date(props.publishedAt).toGMTString()} </div>
                    <a href={props.nurl} target="blank" className="btn btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default Ncomponent