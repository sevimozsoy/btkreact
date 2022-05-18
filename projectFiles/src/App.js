import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Nav from "./Nav";
import ProductList from "./ProductList";

function App() {
  let productInfo = { title: "Product List" };
  let categoryInfo = { title: "Category List" };
  //encapsulation

  const [productsWithoutRedux, setProductsWithoutRedux] = useState(null);
  const [id,setId] = useState();

  let url = "http://localhost:3000/products";
  if (id) {
    url += "?categoryId=" + id
    console.log(url)
  }

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProductsWithoutRedux(data);
      });
  }, [id]);

  return (
    <div>
      <Container>
        <Row>
          <Nav />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} id={id} setId={setId}/>
          </Col>
          <Col xs="9">
            {productsWithoutRedux && (
              <ProductList products={productsWithoutRedux} info={productInfo} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
