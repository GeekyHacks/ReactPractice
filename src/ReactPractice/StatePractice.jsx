import { useState } from 'react';

// export default function Form() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState('Hi!');
//   if (isSent) {
//     return <h1>Your message is on its way!</h1>
//   }
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       setIsSent(true);
//       sendMessage(message);
//     }}>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// function sendMessage(message) {
// //  message=""
// }

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   return (
//     <div
//       onPointerMove={(e) => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY,
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           backgroundColor: 'red',
//           borderRadius: '50%',
//           transform: `translate(${position.x}px, ${position.y}px)`,
//           left: -10,
//           top: -10,
//           width: 20,
//           height: 20,
//         }}
//       />
//     </div>
//   );
// }

// export default function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [status, setStatus] = useState('typing');

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('sending');
//     await sendMessage(text);
//     setStatus('sent');
//   }

//   const isSending = status === 'sending';
//   const isSent = status === 'sent';

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea disabled={isSending} value={text} onChange={(e) => setText(e.target.value)} />
//       <br />
//       <button disabled={isSending} type="submit">
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
// }

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const fullName = firstName + ' ' + lastName;

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name: <input value={firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name: <input value={lastName} onChange={handleLastNameChange} />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{' '}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

