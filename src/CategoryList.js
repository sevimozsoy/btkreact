import React, { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

function CategoryList(props) {
    
    const [categories, setCategories] = useState([
        {categoryId: 1, categoryName: "Beverages"},
        {categoryId: 2, categoryName: "Pastas"},

    ]);

    const [categoryNameDisplay,setcategoryNameDisplay] = useState();
    
    const changeCategory = (category) => {
        setcategoryNameDisplay(category.categoryName)
    }

    return (
            <div>
                
                <h2>
                    {props.info.title}
                </h2>

                <ListGroup>
                    {
                        categories.map(category => (<ListGroupItem onClick={() => changeCategory(category)} key={category.categoryId}>{category.categoryName}</ListGroupItem>))
                    }
                </ListGroup>
            
                    <h4>
                        {categoryNameDisplay}
                    </h4>

            </div>
        )
    }

export default CategoryList