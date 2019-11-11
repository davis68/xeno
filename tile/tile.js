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
      this.handleNumberChange = this.handleNumberChange.bind(this);
    };
    
    handleNumberChange(event) {
      this.setState({
        value: event.target.value
      });
      // now update xeno by polling gall and updating here
      console.log("This is the new value of field myField: " + event.target.value);
      // unfortunately due to the time spent calculating, we always fetch
      // the last value requested, not the current number
      // this could be made more obvious in the interface, I suppose
      api.action('xeno', 'json', {xeno: Number(this.state.value)});
      console.log(this.props.data);
    };
    
    render() {
      return (
        <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
        <p className="gray label-regular b absolute" style={{ left: 8, top: 4 }}>Xeno</p>
        <p className="gray label-regular absolute" style={{ top: 25, left: 8 }}>Number to <a href="http://hyperstition.abstractdynamics.org/archives/003538.html">Xenotate</a>:</p>
    	<div className="absolute" style={{ top: 48, left: 8 }}>
    	<form>
          <div className="xeno">
            <input type="number" style={{ width: 184}} value={this.state.value} onChange={this.handleNumberChange} min="2" max="640"/>
          </div>
        </form>
        <p className="gray label-regular b absolute" style={{ fontSize: 32, color: '#45bebe' }}>{this.props.data.number} → {this.props.data.xeno}</p>
    	</div>
        </div>
    );
  }
}

window.xenoTile = xenoTile;
