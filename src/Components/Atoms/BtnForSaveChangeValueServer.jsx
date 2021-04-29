import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForSaveChangeValueServer = ({ value, index, updateValueOfServer }) => {
  return (
    <button
      onClick={() => {
        updateValueOfServer(index, value[0], optionInputWichChange[1])
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
  updateValueOfServer: (id, type, option) =>
    dispatch(updateValueOfServer(id, type, option)),
})

export default memo(connect(null, mapToDispatch)(BtnForSaveChangeValueServer))
