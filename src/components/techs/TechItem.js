import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({tech, deleteTech}) => {

  const onDelete = () => {
    deleteTech(tech.id)
    M.toast({ html: 'Tech has been deleted.'})
  }

  return (
    <li className="collection-item">
      <div>{tech.firstName} {tech.lastName}</div>
      <a 
        href="#!" 
        className="secondary-content"
        onClick={onDelete}
        >
        <i className="material-icons red-text">delete</i>
      </a>
    </li>
  )
}

TechItem.propTypes = {
  tech:  PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
}

export default connect(null, {deleteTech})(TechItem)
