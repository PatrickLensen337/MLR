import React from 'react';
import './slf.css';

const Sfl = ({ children, title, color, image, buttonlink, ...otherProps }) => {
    return (
        <div>
            <div className="sfl-container">
                <div className="colorPanel" style={{ backgroundColor: `${color}` }}>
                    <div className="title">
                        {title}
                    </div>
                    <div className="button">
                        <a href={buttonlink} className="sf1-button">Read more</a>
                    </div>
                </div>
                <div className="sfl-image"><img src={image} /></div>
            </div>
        </div>
    )
}

export default Sfl;