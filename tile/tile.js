import React, { Component } from 'react';
import classnames from 'classnames';
import _ from 'lodash';


export default class xenoTile extends Component {
    constructor(props) {
      super(props);
      console.log("og props");
      console.log(this.props);
      this.state = {
        value: 2
      };
    };
    
    handleNumberChange(event) {
      this.setState({value: event.target.value});
      //api.action('xeno', 'json', {notes: this.state.notes});
    };

    render() {
      return (
        <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
        <p className="gray label-regular b absolute" style={{ left: 8, top: 4 }}>Xeno</p>
    	<div className="absolute" style={{ top: 25, left: 8 }}>
    	<form onSubmit={this.handleNumberChange}>
          <div className="xeno">
            <input type="text" style={{ width: 184}} value={this.state.value} onChange={this.handleNumberChange} />
          </div>
          <button type="button" onClick={this.handleAddNote} className="small">Xenotate!</button>
        </form>
    	</div>
        </div>
    );
  }
}

window.xenoTile = xenoTile;
