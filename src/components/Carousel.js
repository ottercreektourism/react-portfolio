import React from 'react';

import Card from '../components/Card';
import ecommerce from '../assets/ecommerce';
import geography from '../assets/geography';
import music from '../assets/music';
import password from '../assets/password';
import team from '../assets/team';
import trails from '../assets/trails';

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'project title0',
                    subTitle: 'language used here',
                    imgSrc: ecommerce,
                    link: 'google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'project title1',
                    subTitle: 'language used here',
                    imgSrc: geography,
                    link: 'google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'project title2',
                    subTitle: 'language used here',
                    imgSrc: music,
                    link: 'google.com',
                    selected: false
                },
                {
                    id: 3,
                    title: 'project title3',
                    subTitle: 'language used here',
                    imgSrc: password,
                    link: 'google.com',
                    selected: false
                },
                {
                    id: 4,
                    title: 'project title4',
                    subTitle: 'language used here',
                    imgSrc: team,
                    link: 'google.com',
                    selected: false
                },
                {
                    id: 5,
                    title: 'project title5',
                    subTitle: 'language used here',
                    imgSrc: trails,
                    link: 'google.com',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });


        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }


}

export default Carousel