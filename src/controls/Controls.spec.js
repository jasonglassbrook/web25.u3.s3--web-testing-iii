import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

describe (`the Controls component`, () => {

  test (`renders and unmounts without crashing`, () => {
    const { unmount } = render (<Controls/>);

    unmount ();
  });

  test (`has button to toggle \`closed\``, () => {
    const { getByTestId } = render (<Controls/>);
    const ToggleClosed = getByTestId ('toggle-closed');

    expect (ToggleClosed).toBeInTheDocument ();
  });

  test (`has button to toggle \`locked\``, () => {
    const { getByTestId } = render (<Controls/>);
    const ToggleLocked = getByTestId ('toggle-locked');

    expect (ToggleLocked).toBeInTheDocument ();
  });

  test.todo (`the \`closed\` toggler text changes to reflect action`);

  test.todo (`the \`locked\` toggler text changes to reflect action`);

  test.todo (`the \`closed\` toggler is disabled when \`locked\``);

  test.todo (`the \`locked\` toggler is disabled when not \`closed\``);

});
