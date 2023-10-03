/* eslint react/prop-types: 0 */
export default function Badge(
    { 
        children = "Text", 
        type = "square",
        colour = "gray"
    }
) {
    return (<div className={`badge ${type.toLowerCase()} ${colour.toLowerCase()}`}>{children}</div>)
}