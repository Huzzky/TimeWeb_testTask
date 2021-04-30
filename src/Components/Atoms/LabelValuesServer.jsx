import PropTypes from 'prop-types'
import { memo } from 'react'

const LabelValuesServer = ({ labelText, className }) => {
  return <h3 className={className}>{labelText}</h3>
}

LabelValuesServer.propTypes = {
  labelText: PropTypes.string,
}

export default memo(LabelValuesServer)
