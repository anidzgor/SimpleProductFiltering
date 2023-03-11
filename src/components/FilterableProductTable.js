import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterText: '', inStockOnly: false };

        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleStockCheckBoxChange = this.handleStockCheckBoxChange.bind(this);
    }

    handleInputTextChange(text) {
        this.setState(
            {
                filterText: text
            }
        );
    }

    handleStockCheckBoxChange(checked) {
        this.setState(
            {
                inStockOnly: checked
            }
        );
    }

    render() {
        let products = this.props.products.filter(product => product.name.toLowerCase().startsWith(this.state.filterText));
        if (this.state.inStockOnly) {
            products = products.filter(product => product.stocked === true);
        }

        return (
            <>
                <SearchBar
                    handleInputTextChange={this.handleInputTextChange}
                    handleStockCheckBoxChange={this.handleStockCheckBoxChange}
                />
                <ProductTable products={products} />
            </>
        );
    }
}

export default FilterableProductTable;