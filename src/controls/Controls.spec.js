import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
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

  test (`the \`closed\` toggler's text changes to reflect action`, () => {
    const { getByTestId } = render (<Controls closed={false} locked={false}/>);
    const ToggleClosed = getByTestId ('toggle-closed');

    /// act : toggle false -> true ///
    const beforeOn = ToggleClosed.textContent;
    act (() => {
      fireEvent.click (ToggleClosed);
    });
    const afterOn = ToggleClosed.textContent;

    /// act : toggle true -> false ///
    const beforeOff = ToggleClosed.textContent;
    act (() => {
      fireEvent.click (ToggleClosed);
    });
    const afterOff = ToggleClosed.textContent;

    /// assert ///
    // console.log (beforeOn, afterOn);
    expect (afterOn).not.toBe (beforeOn);
    // console.log (beforeOff, afterOff);
    expect (afterOff).not.toBe (beforeOff);
  });

  test (`the \`locked\` toggler's text changes to reflect action`, () => {
    const { getByTestId } = render (<Controls locked={false} closed={true}/>);
    const ToggleLocked = getByTestId ('toggle-locked');

    /// act : toggle false -> true ///
    const beforeOn = ToggleLocked.textContent;
    act (() => {
      fireEvent.click (ToggleLocked);
    });
    const afterOn = ToggleLocked.textContent;

    /// act : toggle true -> false ///
    const beforeOff = ToggleLocked.textContent;
    act (() => {
      fireEvent.click (ToggleLocked);
    });
    const afterOff = ToggleLocked.textContent;

    /// assert ///
    // console.log (beforeOn, afterOn);
    expect (afterOn).not.toBe (beforeOn);
    // console.log (beforeOff, afterOff);
    expect (afterOff).not.toBe (beforeOff);
  });

  test (`the \`closed\` toggler is ENABLED when not \`locked\``, () => {
    const { getByTestId } = render (<Controls locked={false}/>);
    const ToggleClosed = getByTestId ('toggle-closed');

    expect (ToggleClosed).toBeEnabled ();
  });

  test (`the \`closed\` toggler is DISABLED when \`locked\``, () => {
    const { getByTestId } = render (<Controls locked={true}/>);
    const ToggleClosed = getByTestId ('toggle-closed');

    expect (ToggleClosed).toBeDisabled ();
  });

  test (`the \`locked\` toggler is ENABLED when \`closed\``, () => {
    const { getByTestId } = render (<Controls closed={true}/>);
    const ToggleLocked = getByTestId ('toggle-locked');

    expect (ToggleLocked).toBeEnabled ();
  });

  test (`the \`locked\` toggler is DISABLED when not \`closed\``, () => {
    const { getByTestId } = render (<Controls closed={false}/>);
    const ToggleLocked = getByTestId ('toggle-locked');

    expect (ToggleLocked).toBeDisabled ();
  });

});
