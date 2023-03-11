function SearchBar(props) {

    function handleInputTextChange(e) {
        props.handleInputTextChange(e.target.value);
    }

    function handleStockCheckBoxChange(e) {
        props.handleStockCheckBoxChange(e.target.checked);
    }

    return (
        <div>
            <input type="text" name="name" onChange={handleInputTextChange}/>
            <br/>
            <label>
                <input type="checkbox" onChange={handleStockCheckBoxChange}/>
                Only show products in stock
            </label>
        </div>
    );
}

export default SearchBar;