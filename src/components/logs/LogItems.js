import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const LogItems = ({log}) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'blue-text' : 'purple-text'}`}>{log.message}</a>
        <br/>
        <span className="gray-text">
        <span className="black-text">ID #{log.id}</span>lst updated by <span className="black-text">{log.techs}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#" className="secondary-content"><i className="material-icons green-text">delete</i></a>
      </div>
    </li>
  )
}

LogItems.propTypes = {
log:  PropTypes.object.isRequired
}

export default LogItems
