function CakeSmallCard(props) {
  return (
    <div className="flex justify-center items-center bg-white min-w-fit w-48 h-36 xl:h-48 border rounded-lg border-yellow">
      <img
        onClick={() => props.selectCake()}
        loading="lazy"
        className="w-32 h-32 xl:w-40 xl:h-40 hover:cursor-pointer"
        alt="cake"
        src={props.image}
      />
    </div>
  );
}
export default CakeSmallCard;
