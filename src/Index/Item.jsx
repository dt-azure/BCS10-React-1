import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-3 mb-5">
        <div className="item">
          <div className="card border-0 h-100">
            <div className="card-header">
              <span>500 x 325</span>
            </div>

            <div className="card-body text-center px-3 pb-5">
              <h2 className="fs-3 fw-bold mb-4">Fresh new layout</h2>
              <p className="mb-0">
                With Bootstrap 5, we've created a fresh new layout for this
                template!
              </p>
            </div>

            <div className="card-footer p-4">
              <a className="btn btn-primary" href="#!">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
