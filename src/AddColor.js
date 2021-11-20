import { useState } from 'react';
import { Colorbox } from './Colorbox';

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState([]);
  return (
    <div>
      <input type="text"
        style={styles}
        onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColors([...colors, color])}>AddColor</button>
      {colors.map((clr) => (
        <Colorbox clr={clr} />))}
    </div>
  );
}

function AddMovie() {
    const [name,setName] = useState("");
    const [poster,setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const [rating, setRating] = useState("");

    return(
        <div>
            <input type ="text" placeholder= "Enter Movie name"/>
        </div>
    )
}
