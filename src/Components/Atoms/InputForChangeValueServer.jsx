import PropTypes from 'prop-types'
import { memo } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'

const InputForChangeValueServer = ({ selectedServer, isLoading }) => {
  const [valueInServerNameForChange, setValueInServerNameForChange] = useState(
    selectedServer[0].server_name,
  )
  return (
    <input
      disabled={isLoading ? 'disabled' : ''}
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
  isLoading: serverListReducers.isLoadingRequestToChangeValueServer,
})

export default memo(connect(mapStateToProps)(InputForChangeValueServer))
