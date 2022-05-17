import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="container border-1">
        <div className="my-4">
          <div className="p-4 bg-light">
            <h1 className="display-5 fw-bold">A warm welcome!</h1>
            <p className="fs-4">
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <a className="btn btn-primary btn-lg" href="#!">
              Call to action
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
