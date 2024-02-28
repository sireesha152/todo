// Write your code here
const TodoItem = props => {
  const {itemDetails} = props
  const {id, title, deleteItem} = itemDetails
  const button = () => {
    deleteItem(id)
  }
  return (
    <li className="listItems">
      <p className="listItem">{title}</p>
      <button className="button" onClick={button}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
