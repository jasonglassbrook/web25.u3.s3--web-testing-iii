import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe ('the Dashboard component', () => {
  test ('renders', () => {
    render (<Dashboard/>);
  })
  test ('shows the display', () => {
    const { getByTestId } = render (<Dashboard/>);
    const Display = getByTestId ('display-panel');

    expect (Display).toBeInTheDocument ();
    expect (Display).toHaveClass ('display panel');
  });
  test ('shows the controls', () => {
    const { getByTestId } = render (<Dashboard/>);
    const Controls = getByTestId ('controls-panel');

    expect (Controls).toBeInTheDocument ();
    expect (Controls).toHaveClass ('controls panel');
  });
});
