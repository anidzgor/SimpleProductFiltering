function ProductCategoryRow({category}) {
    return (
        <tr>
            <td colSpan={2} className="font-weight-bold">{category}</td>
        </tr>
    )
}

export default ProductCategoryRow;