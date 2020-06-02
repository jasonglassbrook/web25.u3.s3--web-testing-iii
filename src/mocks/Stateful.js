class Stateful {
  constructor (initState) {
    this.state = initState;
  };

  getState = () => {
    return (this.state)
  };

  setState = (state) => {
    this.state = state;
    return (this.state);
  };

  mergeState = (state) => {
    return (
      this.setState ({ ...this.state, ...state })
    );
  };

  toggleState = (field) => {
    return (
      this.mergeState ({ [field] : !this.state[field] })
    );
  };
};

export default Stateful
