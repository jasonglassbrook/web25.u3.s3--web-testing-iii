import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display';

describe (`the Display component`, () => {

  test (`renders and unmounts without crashing`, () => {
    const { unmount } = render (<Display/>);

    unmount ();
  });

  test (`displays whether closed/open`, () => {
    const { getByTestId } = render (<Display/>);
    const IsClosed = getByTestId ('is-closed');

    expect (IsClosed).toBeInTheDocument ();
  });

  test (`displays whether locked/unlocked`, () => {
    const { getByTestId } = render (<Display/>);
    const IsLocked = getByTestId ('is-locked');

    expect (IsLocked).toBeInTheDocument ();
  });

  test (`displays 'Closed' when \`closed\``, () => {
    const { getByTestId } = render (<Display closed={true}/>);
    const IsClosed = getByTestId ('is-closed');

    expect (IsClosed).toHaveTextContent ('Closed');
  });

  test (`displays 'Open' when not \`closed\``, () => {
    const { getByTestId } = render (<Display closed={false}/>);
    const IsClosed = getByTestId ('is-closed');

    expect (IsClosed).toHaveTextContent ('Open');
  });

  test (`displays 'Locked' when \`locked\``, () => {
    const { getByTestId } = render (<Display locked={true}/>);
    const IsLocked = getByTestId ('is-locked');

    expect (IsLocked).toHaveTextContent ('Locked');
  });

  test (`displays 'Unlocked' when not \`locked\``, () => {
    const { getByTestId } = render (<Display locked={false}/>);
    const IsLocked = getByTestId ('is-locked');

    expect (IsLocked).toHaveTextContent ('Unlocked');
  });

  test (`uses 'red-led' class when \`closed\` or \`locked\``, () => {
    const { getByTestId } = render (<Display closed={true} locked={true}/>);
    const IsClosed = getByTestId ('is-closed');
    const IsLocked = getByTestId ('is-locked');

    expect (IsClosed).toHaveClass ('red-led');
    expect (IsLocked).toHaveClass ('red-led');
  });

  test (`uses 'green-led' class when \`open\` or \`unlocked\``, () => {
    const { getByTestId } = render (<Display closed={false} locked={false}/>);
    const IsClosed = getByTestId ('is-closed');
    const IsLocked = getByTestId ('is-locked');

    expect (IsClosed).toHaveClass ('green-led');
    expect (IsLocked).toHaveClass ('green-led');
  });

});
