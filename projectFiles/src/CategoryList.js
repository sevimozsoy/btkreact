import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

function CategoryList(props) {
  const [categories, setCategories] = useState();
  const [categoryNameDisplay, setcategoryNameDisplay] = useState();
 

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const changeCategory = (category) => {
    setcategoryNameDisplay(category.categoryName);
    props.setId(category.id);
  };

  return (
    <div>
      <h2>{props.info.title}</h2>

      {categories && (
        <ListGroup>
          {categories.map((category) => (
            <ListGroupItem
              onClick={() => changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}

      <h4>{categoryNameDisplay}</h4>
      <h4>{props.id}</h4>
    </div>
  );
}

export default CategoryList;
