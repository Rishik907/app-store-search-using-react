// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, onChangeTab, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onTab = () => {
    onChangeTab(tabId)
  }

  const activeClassName = isActive ? 'select-button' : ''

  return (
    <li className="single-tab-item">
      <button
        type="button"
        onClick={onTab}
        className={`tab ${activeClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
