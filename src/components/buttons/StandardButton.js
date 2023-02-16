function StandardButton(props) {
  return (
    <button
      onClick={() => props.event()}
      type="button"
      className="rounded border-2 border-yellow bg-red h-12 w-32
  font-medium leading-tight text-yellow transition duration-150 ease-in-out shadow-md
  hover:bg-medium-red
  focus:outline-none focus:ring-0"
    >
      <h4 className="py-2">{props.text}</h4>
    </button>
  );
}

export default StandardButton;
