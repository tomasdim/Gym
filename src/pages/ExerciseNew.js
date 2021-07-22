import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import actions from "../state/actions/exercises";
import "../components/styles/ExerciseNew.css";

class ExerciseNew extends React.Component {
  state = {
    form: {
      title: "",
      description: "",
      img: "",
      leftColor: "",
      rightColor: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setNewExercise(this.state.form);
    this.props.history.push("/exercise");
  };

  render() {
    console.log(this.props);
    return (
      <div className="exerciseFormContainer">
        <div className="row">
          <div className="col-sm">
            <Card {...this.state.form} />
          </div>
          <div className="col-sm">
            <ExerciseForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              form={this.state.form}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(null, mapDispatchToProps)(ExerciseNew);
