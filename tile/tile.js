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
      api.action('xeno', 'json', {xeno: Number(this.state.value)});
      console.log(this.props.data);
    };

    render() {
      return (
        <div className="w-100 h-100 relative" style={{ background: '#1a1a1a' }}>
        <p className="gray label-regular b absolute" style={{ left: 8, top: 4 }}>Xeno</p>
    	<div className="absolute" style={{ top: 25, left: 8 }}>
    	<form>
          <div className="xeno">
            <input type="number" style={{ width: 184}} value={this.state.value} onChange={this.handleNumberChange} />
          </div>
        </form>
        <p className="gray label-regular b absolute" style={{ fontsize: 32; }}>{this.props.data.xeno}</p>
    	</div>
        </div>
    );
  }
}

window.xenoTile = xenoTile;
