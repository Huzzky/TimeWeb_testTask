import PropTypes from 'prop-types'
import { memo } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const InputForChangeValueServer = ({ selectedServer }) => {
  const [valueInServerNameForChange, setValueInServerNameForChange] = useState(
    selectedServer.server_name,
  )
  return (
    <input
      value={valueInServerNameForChange}
      onChange={(e) => {
        setValueInServerNameForChange(e.currentTarget.value)
      }}
    ></input>
  )
}

InputForChangeValueServer.propTypes = {}

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
})

export default memo(connect(mapStateToProps)(InputForChangeValueServer))
