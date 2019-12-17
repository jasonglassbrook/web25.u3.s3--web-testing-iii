import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Stateful from '../mocks/Stateful';

// import Dashboard from '../dashboard/Dashboard';
import Controls from './Controls';

/***************************************
  mocks
***************************************/

const mock = {};

mock.state = {
  closable : {
    closed : false,
    locked : false,
  },
  lockable : {
    closed : true,
    locked : false,
  },
};

mock.context = Stateful;

/// array-like ///
const first = (a) => (a[0]);
const last = (a) => (a[a.length - 1]);
const most = (a) => (a.slice (0, a.length - 1));
const rest = (a) => (a.slice (1));

/// strings ///
const toFirstUpperCase = (s) => (
  first (s).toUpperCase () + rest (s)
);
const toPastTense = (s) => (
  s + (last (s) === 'e' ? '' : 'e') + 'd'
);
const toAble = (s) => (
  (last (s) === 'e' ? most (s) : s) + 'able'
);

mock.toggler = (Container, verb) => {
  /// setup : test ///
  const verbAble = toAble (verb);
  const verbPast = toPastTense (verb);

  /// setup : state ///
  const context = new mock.context (mock.state[verbAble]);
  const props = () => ({
    ...context.getState (),
    [`toggle${toFirstUpperCase (verbPast)}`] : () => context.toggleState (verbPast),
  })
  const getContainer = () => (<Container {...(props ())}/>);

  /// setup : components ///
  const funs = render (getContainer ());
  const getToggler = () => funs.getByTestId (`toggle-${verbPast}`);

  ///
  return {
    context,
    container : { get : getContainer, props, ...funs },
    toggler : { get: getToggler },
  };
}

/***************************************
  MAIN
***************************************/
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
    const { container, toggler } = mock.toggler (Controls, 'close');

    /// act : toggle false -> true ///
    const beforeOn = toggler.get ().textContent;
    fireEvent.click (toggler.get ());
    container.rerender (container.get ());
    const afterOn = toggler.get ().textContent;

    /// act : toggle true -> false ///
    const beforeOff = toggler.get ().textContent;
    fireEvent.click (toggler.get ());
    container.rerender (container.get ());
    const afterOff = toggler.get ().textContent;

    /// assert ///
    expect (afterOn).not.toBe (beforeOn);
    expect (afterOff).not.toBe (beforeOff);
  });

  test (`the \`locked\` toggler's text changes to reflect action`, () => {
    const { container, toggler } = mock.toggler (Controls, 'lock');

    /// act : toggle false -> true ///
    const beforeOn = toggler.get ().textContent;
    fireEvent.click (toggler.get ());
    container.rerender (container.get ());
    const afterOn = toggler.get ().textContent;

    /// act : toggle true -> false ///
    const beforeOff = toggler.get ().textContent;
    fireEvent.click (toggler.get ());
    container.rerender (container.get ());
    const afterOff = toggler.get ().textContent;

    /// assert ///
    expect (afterOn).not.toBe (beforeOn);
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
