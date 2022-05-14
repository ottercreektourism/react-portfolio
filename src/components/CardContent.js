import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardContent(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});
    return(
        <animated.div className="g-card-content" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}

export default CardContent