import PropTypes from 'prop-types'
import { memo } from 'react'

const LabelValuesServer = ({ labelText }) => {
  return <h3>{labelText}</h3>
}

LabelValuesServer.propTypes = {
  labelText: PropTypes.string,
}

export default memo(LabelValuesServer)
