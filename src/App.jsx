import './styling/App.css';
// import Navbar from './components/Navbar.jsx';
// import LogInForm  from "./components/logInForm.jsx";
import AnimalsList from './ReactPractice/AnimalsList.jsx';
import Btn from './ReactPractice/propsprac.jsx';
import Component from './ReactPractice/StatePractice.jsx';
import Form from './ReactPractice/StatePractice.jsx';
import MovingDot from './ReactPractice/StatePractice.jsx';
import FeedbackForm from './ReactPractice/StatePractice.jsx';
import Menu from './ReactPractice/StatePractice.jsx';
import FunctionalInput from './ReactPractice/classComponent.jsx';
import ClassInput from './ReactPractice/classComponent.jsx';

// function App() {
//   // const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
//   const animals = [];
//   return (
//     <>
//       <h1>Animals: </h1>
//       <AnimalsList animals={animals} />

//       ٍ{/* <LogInForm/> */}
//     </>
//   );
// }

// function App() {
//   const handleTheClickEven = (url) => {
//     url='https://www.theodinproject.com/lessons/node-path-react-new-passing-data-between-components#functions-as-props'
//     window.location.href = url;
//   };
//   return (
//     <>
//       <Btn handleClick={handleTheClickEven} />
//       <Btn text="Click me!" color="blue" fontSize={14} />
//       <Btn text="ABD" color="red" fontSize={20} />
//     </>
//   );
// }

function App() {
  return (
    <>
      <ClassInput />
    </>
  );
}

export default App;
