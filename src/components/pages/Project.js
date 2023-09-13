import React from "react";

function Project(props) {
    return (
        <ul className="list-group">
            {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
            {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
            {props.projects.map(item => (
                <div>
                    <div className="list-group-item" key={item.id}>
                        {item.title}

                        

                        <div className="card-image">
                            <figure className="image is-4by3">
                                <a href={item.live} target="_blank" rel="noreferrer">
                                    <img src={item.image} alt="Placeholder image"/>
                                </a>
                            </figure>
                        </div>
                        <div>
                            <a href={item.repo} className="card-footer-item" target="_blank" rel="noreferrer">
                                See the Repo!
                            </a>
                            <br />
                            <a href={item.live} className="card-footer-item" target="_blank" rel="noreferrer">
                                See the Live Site!
                            </a>
                        </div>
                    </div>
                </div>

            ))}
        </ul>
    );
}

export default Project;