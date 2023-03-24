import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ products }) {

    const [text, setText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    function handleInputTextChange(text) {
        setText(text);
    }

    function handleStockCheckBoxChange(checked) {
        setInStockOnly(checked);
    }

    let productsFiltered = products.filter(product => product.name.toLowerCase().startsWith(text.toLowerCase()));
    if (inStockOnly) {
        productsFiltered = productsFiltered.filter(product => product.stocked === true);
    }

    return (
        <>
            <SearchBar
                onInputTextChange={handleInputTextChange}
                onStockCheckBoxChange={handleStockCheckBoxChange}
            />
            <ProductTable products={productsFiltered} />
        </>
    );
}

export default FilterableProductTable;