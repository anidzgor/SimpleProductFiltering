function SearchBar({onInputTextChange, onStockCheckBoxChange}) {
    return (
        <div>
            <input type="text" name="name" onChange={(e) => onInputTextChange(e.target.value)}/>
            <br/>
            <label>
                <input type="checkbox" onChange={(e) => onStockCheckBoxChange(e.target.checked)}/>
                Only show products in stock
            </label>
        </div>
    );
}

export default SearchBar;