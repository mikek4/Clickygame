import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
            <div className="row">
                <div className="col-3-md">
                    <div className="card">
                        <div className="img-container">
                            <img alt={props.name} src={props.image} />
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default ImageCard;