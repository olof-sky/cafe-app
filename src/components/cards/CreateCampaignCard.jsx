import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateCampaignCard = (props) => {
  const [image, setImage] = useState(props.img);
  const [imagePreview, setImagePreview] = useState(props.img);
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);
  const [description, setDescription] = useState(props.description);
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState(props.ingredients);

  return (
    <form className="flex flex-col">
      <img className="w-40" src={imagePreview}></img>
      <input
        required
        type="file"
        accept="image/*"
        onChange={(event) => {
          const selectedFile = event.target.files[0];
          setImage(selectedFile);
          setImagePreview(URL.createObjectURL(selectedFile));
        }}
      />
      <label className="text-yellow">Titel:</label>
      <input
        required
        type="text"
        value={title}
        placeholder="Lägg till titel"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <label className="text-yellow">Pris:</label>
      <input
        required
        type="number"
        value={price}
        placeholder="0"
        onChange={(event) => {
          setPrice(parseFloat(event.target.value));
        }}
      />
      <p>:-</p>
      <label className="text-yellow">Beskrivning:</label>
      <input
        required
        type="text"
        value={description}
        placeholder="Lägg till beskrivning"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <label className="text-yellow">Ingredienser:</label>
      <ul className="">
        {ingredients.map((ingredient) => {
          ingredient = JSON.parse(ingredient);
          return (
            <li className="flex list-none" key={ingredient.id}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const updatedIngredients = ingredients.filter((item) => {
                    return JSON.parse(item).id !== ingredient.id;
                  });
                  setIngredients(updatedIngredients);
                }}
                className="text-yellow w-6"
              >
                -
              </button>
              {ingredient.value}
            </li>
          );
        })}{" "}
      </ul>
      <input
        type="text"
        value={ingredient}
        placeholder="Lägg till ingrediens"
        onChange={(event) => {
          setIngredient(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            const id = uuidv4();
            const newIngredient = JSON.stringify({
              id: id,
              value: event.target.value,
            });
            const newIngredients = [...ingredients, newIngredient];
            setIngredients(newIngredients);
            setIngredient("");
          }
        }}
      />
    </form>
  );
};

export default CreateCampaignCard;
