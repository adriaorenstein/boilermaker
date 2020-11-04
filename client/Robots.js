import React from "react";
import { connect } from "react-redux";

import { fetchRobots } from "./reducer";

export class Robots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }
  render() {
    return (
      <div>
        {this.props.robots.map((robot) => (
          <div key={robot.id}>
            <h1 className="name">{robot.name}</h1>
            <h3 className="duty">{robot.duty}</h3>
            <img className="image" src={robot.image} />
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapState, mapDispatch)(Robots);
