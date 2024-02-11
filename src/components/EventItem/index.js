// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, getSelected} = props
  const {imageUrl, name, location, id} = itemDetails

  const getId = () => {
    getSelected(id)
  }

  return (
    <li className="container">
      <button onClick={getId} type="button" className="cls-btn">
        <img src={imageUrl} alt="event" className="icon-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
