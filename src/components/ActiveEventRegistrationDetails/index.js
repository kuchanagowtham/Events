// Write your code here
// import {Component} from 'react'
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registarStatus} = props
  console.log(registarStatus)

  const showNotSelected = () => (
    <div className="viewItem-container">
      <p className="register-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const registrationClosed = () => (
    <div className="registrationClosedContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed"
      />
      <h1 className="register-heading">Registrations Are Closed Now!</h1>
      <p className="registerationClosed-heading">
        Stay tuned. We will reopen <br />
        the registrations soon!
      </p>
    </div>
  )

  const doRegister = () => (
    <div className="yetTo-registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-icon"
      />
      <p className="yetToRegister-heading">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautifull art form
      </p>
      <button type="button" className="r-button">
        Register Here
      </button>
    </div>
  )

  const registrationComplete = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="register-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderContent = () => {
    switch (registarStatus) {
      case 'initial':
        return showNotSelected()
      case 'REGISTERED':
        return registrationComplete()
      case 'YET_TO_REGISTER':
        return doRegister()
      case 'REGISTRATIONS_CLOSED':
        return registrationClosed()
      default:
        return null
    }
  }

  return <div>{renderContent()}</div>
}
export default ActiveEventRegistrationDetails
