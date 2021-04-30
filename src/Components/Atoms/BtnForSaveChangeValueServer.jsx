import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForSaveChangeValueServer = ({
  value,
  index,
  selectedServer,
  updateValueOfServer,
}) => {
  return (
    <button
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
  updateValueOfServer: PropTypes.func,
  value: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, index, type, option) =>
    dispatch(updateValueOfServer(id, index, type, option)),
})

const mapStateToProps = ({ serverListReducers }) => ({
  selectedServer: serverListReducers.selectedServer,
})

export default memo(
  connect(mapStateToProps, mapToDispatch)(BtnForSaveChangeValueServer),
)
