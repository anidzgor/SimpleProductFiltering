import Table from 'react-bootstrap/Table';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({products}) {

    const categories = [...new Set(products.map(product => product.category))];

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
                        <ProductCategoryRow key={category} category={category} />
                        {products.map((product, index) => {
                            return (
                                product.category === category &&
                                <ProductRow key={index} product={product} />
                            )
                        })}
                    </tbody>
                )
            })}
        </Table>
        
    );
}

export default ProductTable;