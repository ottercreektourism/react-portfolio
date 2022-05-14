import React from 'react';
import CardContent from '../components/CardContent';

function Card(props) {
    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            { props.item.selected && <CardContent title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
    );

}
export default Card