import React from 'react'

const Scroll = (props) => { 
    //scroll wraps other components, it need to render its children
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
        
    );
}

export default Scroll;