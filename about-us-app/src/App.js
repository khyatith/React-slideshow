import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import AboutDetail from './AboutDetail';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as aboutUsActions from './actions/aboutUsActions';
import PropTypes from 'prop-types';

class App extends Component {

    _updateStart = (value) => {
        this.props.aboutUsActions.updateStart(value);
    }

    render() {
        const AppStyle = { width: '1000px', left: '50%', top: '10%', marginLeft: '-400px', position: 'absolute'};
        const { aboutUs } = this.props;
        return (
            <div className="App" style={ AppStyle }>
                <AboutDetail start= { aboutUs } />
                <Thumbnail id = { 36 } handleClick={ this._updateStart } />
            </div>
        );
    }
}

App.propTypes = {
  aboutUsActions: PropTypes.object,
  aboutUs: PropTypes.number
};

function mapStateToProps(state) {
  return {
    aboutUs: state.aboutUs
  };
}

function mapDispatchToProps(dispatch) {
  return {
        aboutUsActions: bindActionCreators(aboutUsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
