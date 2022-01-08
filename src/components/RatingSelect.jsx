import { useState } from "react";

export default function RatingSelect(props) {
  const [selected, setSelected] = useState(1);

  const handleChange = (e) => {
    setSelected(+e.target.value);
    props.select(+e.target.value);
  }

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value="1"
          checked={selected == 1}
          onChange={handleChange}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value="2"
          checked={selected == 2}
          onChange={handleChange}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value="3"
          checked={selected == 3}
          onChange={handleChange}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value="4"
          checked={selected == 4}
          onChange={handleChange}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected == 5}
          onChange={handleChange}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected == 6}
          onChange={handleChange}
        />
        <label htmlFor="num5">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected == 7}
          onChange={handleChange}
        />
        <label htmlFor="num5">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected == 8}
          onChange={handleChange}
        />
        <label htmlFor="num5">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected == 9}
          onChange={handleChange}
        />
        <label htmlFor="num5">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected == 10}
          onChange={handleChange}
        />
        <label htmlFor="num5">10</label>
      </li>

    </ul>
  );
}
