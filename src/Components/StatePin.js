import React, {PureComponent} from 'react';


export default class CityPin extends PureComponent {

  render() {
    const {size = 20} = this.props;
    
    const height = this.props.incidentNumber*0.07 + 20
    return (

      <img src={this.props.img} style={{height: `${height}px`}} onClick={this.props.onClick}/>
    );
  }
}