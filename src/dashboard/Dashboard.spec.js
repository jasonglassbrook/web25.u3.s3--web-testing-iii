import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe (`the Dashboard component`, () => {

  test (`renders and unmounts without crashing`, () => {
    const { unmount } = render (<Dashboard/>);

    unmount ();
  });

  test (`shows the display`, () => {
    const { getByTestId } = render (<Dashboard/>);
    const Display = getByTestId ('display-panel');

    expect (Display).toBeInTheDocument ();
    expect (Display).toHaveClass ('display panel');
  });

  test (`shows the controls`, () => {
    const { getByTestId } = render (<Dashboard/>);
    const Controls = getByTestId ('controls-panel');

    expect (Controls).toBeInTheDocument ();
    expect (Controls).toHaveClass ('controls panel');
  });

  test (`defaults to not \`locked\` and not \`closed\``, () => {
    const { getByTestId } = render (<Dashboard/>);
    const IsClosed = getByTestId ('is-closed');
    const IsLocked = getByTestId ('is-locked');

    expect (IsClosed).toHaveTextContent ('Open');
    expect (IsLocked).toHaveTextContent ('Unlocked');
  });

});
