import React from 'react';
import Jumbo from '../components/Jumbo';
import Content from '../components/Content';


function AboutMePage(props) {
    return(
        <div>
            <Jumbo title={props.title}/>

            <Content>
                About me paragraph content
            </Content>
        </div>
        // <Jumbo title={props.title}/>
    )
}



export default AboutMePage