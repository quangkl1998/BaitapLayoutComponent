import React, { Component } from "react";
import './item.css';

class Item extends Component {
  render() {
    return (
      <div className="card border-3 border-info mb-5">
        <div className="card-body text-center p-0 pb-3">
          <div className="feature bg-light">
            <span>500x325</span>
          </div>
          <h2 className="fs-4 fw-bold pt-3">Card title</h2>
          <p className="mb-0 py-3">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
          <a class="btn btn-primary" href="#!">Find Out More</a>
        </div>
      </div>
    );
  }
}

export default Item;
