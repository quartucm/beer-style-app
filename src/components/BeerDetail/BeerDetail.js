import React, { propTypes } from 'react';

const BeerDetail = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    ibuMin: React.PropTypes.string,
    ibuMax: React.PropTypes.string
  },
  render() {
    const { name, description, ibuMin, ibuMax } = this.props;

  return (
    <div className="small-12 medium-8 columns">
        <h2>{name}</h2>
        <p>ibu Range: {ibuMin} - {ibuMax}</p>
        <p>{description}</p>
    </div>
  );
  }
});

export default BeerDetail;
