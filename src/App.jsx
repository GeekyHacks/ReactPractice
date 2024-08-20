import './styling/App.css';
import React, { useState } from 'react';
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
import { Tabs, TabItem } from './ReactPractice/Tabs';

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

// Tabs
const App = () => {
  const handleTabClick = (index) => {
    console.log(`Tab clicked: ${index}`);
  };

  return (
    <div>
      <Tabs defaultIndex="1" onTabClick={handleTabClick}>
        <TabItem label="A" index="1">
          Lorem ipsum
        </TabItem>
        <TabItem label="B" index="2">
          Dolor sit amet
        </TabItem>
      </Tabs>
    </div>
  );
};

export default App;
// import Modal from './ReactPractice/Modal';

// const App = () => {
//   const [isModal, setModal] = useState(false);

//   return (
//     <>
//       <button onClick={() => setModal(true)}>Click Here</button>
//       <Modal
//         isVisible={isModal}
//         title="Modal Title"
//         content={<p>Add your content here</p>}
//         footer={<button>Cancel</button>}
//         onClose={() => setModal(false)}
//       />
//     </>
//   );
// };
// export default App;
