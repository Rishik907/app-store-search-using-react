// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {imageUrl, appName} = appItemDetails

  return (
    <li className="list-of-app">
      <img className="app-img" src={imageUrl} alt={appName} />
      <p className="app-text">{appName}</p>
    </li>
  )
}

export default AppItem
