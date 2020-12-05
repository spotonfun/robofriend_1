import React from 'react';
import Card from './Card.js';


const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return ( 
                        <Card 
                            key={robots[i].id} 
                            name={robots[i].name} 
                            id={robots[i].id} 
                            email={robots[i].email}
                        />
                        )
                })
            }
        </div>
    );
}

export default CardList;