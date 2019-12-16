import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

describe (`the Display component`, () => {

  test (`renders without crashing`, () => {
    const { unmount } = render (<Display/>);

    unmount ();
  });

  test.todo (`displays open/closed`);

  test.todo (`displays locked/unlocked`);

  test.todo (`displays 'Closed' when \`closed\`, else 'Open'`);

  test.todo (`displays 'Locked' when \`locked\`, else 'Unlocked'`);

  test.todo (`uses 'red-led' class when \`closed\` or \`locked\``);

  test.todo (`uses 'green-led' class when \`open\` or \`unlocked\``);

});
