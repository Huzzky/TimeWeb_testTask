import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForSaveChangeValueServer = ({
  isLoading,
  value,
  index,
  selectedServer,
  updateValueOfServer,
}) => {
  return (
    <button
      disabled={isLoading ? 'disabled' : ''}
      onClick={() => {
        updateValueOfServer(
          selectedServer[1],
          index,
          value[0],
          optionInputWichChange[2],
        )
      }}
    >
      ok
    </button>
  )
}

BtnForSaveChangeValueServer.propTypes = {
  index: PropTypes.number,
  isLoading: PropTypes.bool,
  recordUserTextToReducer: PropTypes.func,
  selectedServer: PropTypes.array,
  updateValueOfServer: PropTypes.func,
  value: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, index, type, option) =>
    dispatch(updateValueOfServer(id, index, type, option)),
})

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
  isLoading: serverListReducers.isLoadingRequestToChangeValueServer,
})

export default memo(
  connect(mapStateToProps, mapToDispatch)(BtnForSaveChangeValueServer),
)
