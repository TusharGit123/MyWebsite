import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Navbar } from "./components/navbar/Navbar";
// import { NavbarTwo } from "./components/navbar/NavbarTwo";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import ReactQuizHome from "./components/react_quiz/ReactQuizHome";
import ReactReduxHome from "./components/react_redux/ReactReduxHome";
import AddPostForm from "./components/react_redux/AddPostForm";
import Post from "./components/react_redux/Post";
import CalculatorHome from "./components/calculator/CalculatorHome";
// import { Home } from "./components/Home/Home";
import QuizPage from "./components/react_quiz/QuizPage";
import QuizSummary from "./components/react_quiz/QuizSummary";
import UpdatePostForm from "./components/react_redux/UpdatePostForm";
import MyWebsite from "./components/MySite/MyWebsite";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {/* <Navbar />
          <NavbarTwo /> */}

          <Route exact path="/" component={MyWebsite} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/quiz" component={ReactQuizHome} />
          <Route path="/quizpage" component={QuizPage} />
          <Route path="/quizsummary" component={QuizSummary} />
          <Route path="/reactRedux" component={ReactReduxHome} />
          <Route path="/addpost" component={AddPostForm} />
          <Route path="/post/:id" component={Post} />
          <Route path="/updatepost/:id" component={UpdatePostForm} />
          <Route path="/calculator" component={CalculatorHome} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
// last commit 11/02/21
