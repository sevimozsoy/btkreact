import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import CategoryList from './CategoryList';
import Nav from './Nav';
import ProductList from './ProductList';


function App() {

  let productInfo = { title: "Product List" }
  let categoryInfo = { title: "Category List" }
  //encapsulation

  const [productsWithoutRedux, setProductsWithoutRedux] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setProductsWithoutRedux(data)
      })
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList
              products={productsWithoutRedux}
              info={productInfo} />
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
