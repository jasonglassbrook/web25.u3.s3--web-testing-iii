import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls';

describe ('the Controls component', () => {

  test ('renders without crashing', () => {
    const { unmount } = render (<Controls/>);

    unmount ();
  });

});
