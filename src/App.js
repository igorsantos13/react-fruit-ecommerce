import { useState, useEffect } from "react";
import api from "./services/api";
import Card from "./components/Card";
import './app.css';
import Shop from "./components/Shop";


function App() {
  const [data, setData] = useState([])
  const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        api
          .get('api/fruit/all')
          .then((response) => setData(response.data))
          .catch((err)=>{
            console.log("Error: " + err);
          })
      }, []);

      console.log(data)

      const fruits = data.splice(0, 22);

      const onAdd = (props) => {
        const exist = cartItems.find((x) => x.id === props.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === props.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...props, qty: 1 }]);
    }
      };


  return (
    <>
      <div className='container'>
        {fruits.map((item)=>(
          <div key={item.id}>
            <Card
              name={item.name}
              carbohydrates={item.nutritions.carbohydrates}
              protein={item.nutritions.protein}
              fat={item.nutritions.fat}
              calories={item.nutritions.calories}
              sugar={item.nutritions.sugar}
              onAdd={onAdd}
              
            />

          </div>
            

        ))}
          
          <Shop  onAdd={onAdd} cartItems={cartItems}/>
          

      </div>
    </>
  );
}

export default App;