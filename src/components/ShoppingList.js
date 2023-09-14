import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const shoppingItems = items.map((item) => {
    return <li key={item.id} name={item.name}>{item}</li>
  })
  
  const [selectedCategory, setSelectedCategory] = useState("")


  function handleCategoryChange (e) {
    setSelectedCategory(e.target.value)
  }
  const filteredItems = selectedCategory ? items.filter(item => item.category === selectedCategory) : items
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by categor</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
