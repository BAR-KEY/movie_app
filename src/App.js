import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
      if (this.state.isLoading === false) {
        document.write(`we are ready`);
      }
    }, 5000);
  }
  render() {
    const isLoading = this.state;
    return (
      <>
        <div>{isLoading ? "Loading..." : "We are ready"}</div>
      </>
    );
  }
}

export default App;
