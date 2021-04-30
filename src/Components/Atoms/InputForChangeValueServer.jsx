import PropTypes from 'prop-types'
import { memo } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { InputWhichCanBeChanged } from '../../const'
import { recordUserTextToReducer } from '../../store/action/recordUserTextToReducer'

const InputForChangeValueServer = ({
  selectedServer,
  isLoading,
  recordUserTextToReducer,
}) => {
  const [valueInServerNameForChange, setValueInServerNameForChange] = useState(
    selectedServer[0].server_name,
  )
  return (
    <input
      disabled={isLoading ? 'disabled' : ''}
      value={valueInServerNameForChange}
      onChange={(e) => {
        setValueInServerNameForChange(e.currentTarget.value)
        recordUserTextToReducer(
          e.currentTarget.value,
          Object.keys(InputWhichCanBeChanged)[0],
        )
      }}
    ></input>
  )
}

InputForChangeValueServer.propTypes = {
  isLoading: PropTypes.bool,
  selectedServer: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  recordUserTextToReducer: (string, type) =>
    dispatch(recordUserTextToReducer(string, type)),
})

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
  isLoading: serverListReducers.isLoadingRequestToChangeValueServer,
})

export default memo(
  connect(mapStateToProps, mapToDispatch)(InputForChangeValueServer),
)
