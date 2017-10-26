import React, { Component, PropTypes } from 'react';
export default class WarmMode extends Component {
  static propTypes = {
    lightAdjust: PropTypes.string,
  }
  render() {
    document.documentElement.style.backgroundColor = '#111111';
    let { lightAdjust } = this.props;
    console.log(lightAdjust);
    if (lightAdjust.length <= 0) { lightAdjust = 0.4; } else
        if (lightAdjust > 0.5) { lightAdjust = 0.5; } else
        if (lightAdjust < 0.2) { lightAdjust = 0.2; }
    return (<div
      className="voz-warm-filter"
      style={{
        backgroundColor: `rgba(218, 84, 6, ${lightAdjust})`,
        position: 'fixed',
        width: '120%',
        height: '120%',
        top: '0',
        left: '0',
        mixBlendMode: 'multiply',
        zIndex: '9999999',
        pointerEvents: 'none' }}
    />);
  }
}
