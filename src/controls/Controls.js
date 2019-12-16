import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div
    className='controls panel'
    data-testid='controls-panel'>
      <button
      className='toggle-btn'
      data-testid='toggle-locked'
      disabled={!closed}
      onClick={toggleLocked}>
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button
      className='toggle-btn'
      data-testid='toggle-closed'
      disabled={locked}
      onClick={toggleClosed}>
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
