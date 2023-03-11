import Table from 'react-bootstrap/Table';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {

    const categories = [...new Set(props.products.map(product => product.category))];

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {categories.map((category, index) => {
                return (
                    <tbody key={index}>
                        <ProductCategoryRow key={index} category={category} />
                        {props.products.map((product, index) => {
                            return (
                                product.category === category &&
                                <ProductRow key={index} name={product.name} price={product.price} />
                            )
                        })}
                    </tbody>
                )
            })}
        </Table>
        
    );
}

export default ProductTable;