import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({
    id,
    handleClick
}) => {

    const numRows = [];
    for(let i =1; i <= id; i++) {
        numRows.push(i);
    }

    return (
        <div>
        {
            numRows.map((i) => {
                const handleClickChange = () => handleClick(i);
                return (
                    <div className="thumbnail" key={ i } style={thumbnailStyle} onClick={ handleClickChange } >
                        <p> { i } </p>
                    </div>
                )
            })
        }
        </div>
    );
};

const thumbnailStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#000000',
    width: '40px',
    height: '60px',
    display: 'inline-block',
    margin: '20px',
    background: '#87cefa',
    cursor: 'pointer'
};


Thumbnail.propTypes = {
    id: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Thumbnail;
