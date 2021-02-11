import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      fiftyFiftyUsed: 0,
      hintsUsed: 0,
    };
  }
  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        fiftyFiftyUsed: state.fiftyFiftyUsed,
        hintsUsed: state.hintsUsed,
      });
    }
  }

  render() {
    const { state } = this.props.location;
    let stats, remark;
    const userScore = this.state.score;

    if (userScore <= 30) {
      remark = "You need more practice!";
    } else if (userScore > 30 && userScore <= 50) {
      remark = "Better luck next time!";
    } else if (userScore <= 70 && userScore > 50) {
      remark = "You can do better!";
    } else if (userScore >= 71 && userScore <= 84) {
      remark = "You did greate!";
    } else {
      remark = "You are an absolute genius!";
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <div className="container jumbotron summary">
            <div>
              <span>
                <i
                  className="fa fa-check-square-o fa-4x icon"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
            <h1>Quiz has ended!</h1>
            <h4>{remark}</h4>
            <h2>Your score : {this.state.score.toFixed(0)}&#37;</h2>

            <span className="stat left">Total number of questions:</span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />

            <span className="stat left">Number of attemp Question:</span>
            <span className="right">
              {this.state.numberOfAnsweredQuestions}
            </span>
            <br />

            <span className="stat left">Number of Correct Answers:</span>
            <span className="right">{this.state.correctAnswers}</span>
            <br />

            <span className="stat left">Number of Wrong Answers:</span>
            <span className="right">{this.state.wrongAnswers}</span>
            <br />

            <span className="stat left">Hints Used:</span>
            <span className="right">{this.state.hintsUsed}</span>
            <br />

            <span className="stat left">50-50 Used:</span>
            <span className="right">{this.state.fiftyFiftyUsed}</span>
            <br />

            <section>
              <Link to="/quiz">
                <button>Back to home</button>
              </Link>
              <Link to="/quizpage">
                <button>Play again</button>
              </Link>
            </section>
          </div>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No statistics Available</h1>
          <ul>
            <li>
              <Link to="/">Back to home</Link>
            </li>
            <li>
              <Link to="/quiz">Take a quiz</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Summary</title>
        </Helmet>
        <div style={{ marginTop: "5rem" }}> {stats}</div>
      </Fragment>
    );
  }
}

export default QuizSummary;
