import React, { Component } from 'react';


class FlexExample extends Component {
  render() {
    return (
      <div>
        <h1> FlexBox examples </h1>
        <div className="examples-container">
          <div className="container-one">
            <div className="one-example-one">
              <p> 1 </p>
            </div>
            <div className="one-example-two">
              <p> 2 </p>
            </div>
            <div className="one-example-three">
              <p> 3 </p>
            </div>
          </div>

          <div className="container-two">
            <div className="two-example-one">
              <p> 1 </p>
            </div>
            <div className="two-example-two">
              <p> 2 </p>
            </div>
            <div className="two-example-three">
              <p> 3 </p>
            </div>
          </div>

          <div className="container-three">
            <div className="three-example-one">
              <p> 1 </p>
            </div>
            <div className="three-example-two">
              <p> 2 </p>
            </div>
            <div className="three-example-three">
              <p> 3 </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FlexExample;