import React, { useState } from 'react'
import { Table } from 'reactstrap'

function ProductList(props) {


    const [productsHooks] = useState(props.products);


    return (
        <div>
            <h2>{props.info.title}</h2>

            <Table
            >
                <thead>
                    <tr>
                        <th>
                            Product Id
                        </th>
                        <th>
                            Product Name
                        </th>
                        <th>
                            quantityPerUnit Name
                        </th>
                        <th>
                            unitPrice
                        </th>
                        <th>
                            unitsInStock
                        </th>
                    </tr>
                </thead>
                {productsHooks && <tbody>
                    {
                        productsHooks.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td> {product.unitPrice} </td>
                                <td>{product.unitsInStock}</td>
                            </tr>))
                    }
                </tbody>}
            </Table>
        </div>
    )
}

export default ProductList