function SmallButton(props) {
  const toggle = () => {
    props.onToggle();
  };

  const Button = (props) => {
    return (
      <button
        className="rounded-xl border-2 mx-8 mb-6 border-yellow bg-black h-auto w-fit px-2
  font-medium text-yellow transition duration-150 ease-in-out shadow-md
  hover:opacity-80
  focus:outline-none focus:ring-0"
        onClick={() => toggle()}
      >
        <p>{props.text}</p>
      </button>
    );
  };

  return props.toggled ? (
    <Button text={props.toggledText}></Button>
  ) : (
    <Button text={props.untoggledText}></Button>
  );
}
export default SmallButton;
