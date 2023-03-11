function ProductCategoryRow(props) {
    return (
        <tr>
            <td colSpan={2} className="font-weight-bold">{props.category}</td>
        </tr>
    )
}

export default ProductCategoryRow;