import React from "react";

const ImageCard = props => (
    <section id={props.id} class="card grid-container" value={props.id} onClick={() => props.clickPlayer(props.id)}>
        <article class="grid-item">
            <img src={props.image} class="img" alt="character" />
        </article>
    </section>
)

export default ImageCard;