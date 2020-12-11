import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteLog, setCurrent } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'


const LogItems = ({log, deleteLog, setCurrent}) => {

  const onDelete = () => {
    deleteLog(log.id)
    M.toast({
      html: 'Log Deleted'
    })
  }

  return (
    <li className="collection-item">
      <div>
        <a 
          href="#edit-log-modal"
          onClick={() => setCurrent(log)}
          className={`modal-trigger ${log.attention ? 'blue-text' : 'purple-text'}`}>{log.message}</a>
        <br/>
        <span className="gray-text">
        <span className="black-text">ID #{log.id} </span>lst updated by <span className="red-text">{log.tech}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}><i className="material-icons green-text">delete</i></a>
      </div>
    </li>
  )
}

LogItems.propTypes = {
logs:  PropTypes.object.isRequired,
deleteLog: PropTypes.func.isRequired,
setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrent })(LogItems)
