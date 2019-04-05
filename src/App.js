import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reactLocalStorage} from "reactjs-localstorage";

import * as actions from './actions/actionCreators';
import './App.css';
import Column from './components/Column';

class App extends Component {

  componentWillUnmount = () => {
    reactLocalStorage.set('Columns', this.props.columns);
  }

  render() {
    let columList = this.props.columns.map((column, columnIndex) => 
      <Column key={columnIndex} column={column} add={this.props.add} columnIndex={columnIndex} move={this.props.move}/>
    )
    return (
      <div className="App">
        <div className="Columns-container">
          {columList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({columns}) => ({
  columns
});
const mapDispatchToProps = (dispatch) => ({
  add: (text, columnIndex) => dispatch(actions.add(text, columnIndex)),
  move: (direction, cardIndex, columnIndex) => dispatch(actions.move(direction, cardIndex, columnIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
