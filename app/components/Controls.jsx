var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartsStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary">Pause</button>
      } else  if (countdownStatus === 'paused'){
        return <button className="button primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartsStopButton()}
        <button className="button alert hollow"></button>
      </div>
    );
  }
});

module.exports = Controls;
