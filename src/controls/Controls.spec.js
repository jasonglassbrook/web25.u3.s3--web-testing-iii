import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

describe (`the Controls component`, () => {

  test (`renders without crashing`, () => {
    const { unmount } = render (<Controls/>);

    unmount ();
  });

  test.todo (`has button to toggle \`closed\``);

  test.todo (`has button to toggle \`locked\``);

  test.todo (`the \`closed\` toggler text changes to reflect action`);

  test.todo (`the \`locked\` toggler text changes to reflect action`);

  test.todo (`the \`closed\` toggler is disabled when \`locked\``);

  test.todo (`the \`locked\` toggler is disabled when not \`closed\``);

});
