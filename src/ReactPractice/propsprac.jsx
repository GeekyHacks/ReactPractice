function Btn({ text, color, fontSize, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px',
  };

  return (
    <button
      onClick={() => {
        handleClick('https://www.google.com');
      }}
      style={buttonStyle}
    >
      {text}
    </button>
  );
}

Btn.defaultProps = {
  text: 'Click Me!',
  color: 'red',
  fontSize: 25,
};

export default Btn;
