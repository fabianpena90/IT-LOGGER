import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechSelect = ({ getTechs, tech: { techs, loading }}) => {

  useEffect(() => {
    getTechs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    !loading && techs !== null && techs.map(t => (
    <option value={`${t.fistName} ${t.lastName}`} key={t.id}>
      {t.firstName} {t.lastName}
    </option>
    ))
  )
}

TechSelect.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechSelect)
