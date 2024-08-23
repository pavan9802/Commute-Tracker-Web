import { useSelector , useDispatch} from "react-redux";
import { changeText } from "./actions/actions";


function App() {
  const state = useSelector((state) => state);
  console.log(state)
  const dispatch = useDispatch();
  return (
    <div className="cart">
    <h2>Number of items in Cart: {state.text}</h2>
    <button className="green">Add Item to Cart</button>
    <button className="red" onClick={()=>dispatch(changeText("Pavans the best coder ever"))}>Remove Item from Cart </button>
  </div>
  );
}

export default App;
