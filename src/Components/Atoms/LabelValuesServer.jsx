import PropTypes from 'prop-types'
import { memo } from 'react'

const LabelValuesServer = ({ labelText }) => {
  return <h2>{labelText}</h2>
}

LabelValuesServer.propTypes = {
  labelText: PropTypes.string,
}

export default memo(LabelValuesServer)
