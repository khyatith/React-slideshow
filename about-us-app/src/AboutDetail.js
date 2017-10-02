import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './animation.css';

class AboutDetail extends Component {
  render() {
    const start = this.props.start;
    const max = 36;
    const numRows = [];
    for(let i =start; i <= max; i++) {
        if (numRows.length < 3) {
            numRows.push(i);
        }
    }
    return (
        <div className="details">
    {
        numRows.map((i) => {
            return (
                    <ReactCSSTransitionGroup key={ i } transitionName="slide" transitionEnterTimeout={ 300 } transitionLeaveTimeout={ 300 }>
                        <div className="container" key={ i }>
                            <p> Pane {i} </p>
                            <div className="thumb" >
                                <p> Thumb {i} </p>
                            </div>
                            <div className="description">
                                <p> Personal Description </p>
                            </div>
                        </div>
                    </ReactCSSTransitionGroup>
            )
        })
    }
    </div>
    );
  }
}

export default AboutDetail;
