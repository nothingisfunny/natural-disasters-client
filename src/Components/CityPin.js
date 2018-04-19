import React, {PureComponent} from 'react';


export default class CityPin extends PureComponent {

  render() {
    const {size = 20} = this.props;

    return (
      <img src={this.props.img} style={{height: '20px'}}/>
    );
  }
}