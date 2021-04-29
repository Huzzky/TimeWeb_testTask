import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { optionInputWichChange } from '../../const'
import { updateValueOfServer } from '../../store/action/updateValuesOfServer'

const BtnForChangeValueServer = ({ index, value, updateValueOfServer }) => {
  return (
    <img
      onClick={() => {
        updateValueOfServer(index, value[0], optionInputWichChange[0])
      }}
      width="32px"
      height="32px"
      src="./pen.svg"
      alt="Изменить"
      title="Изменить"
    ></img>
  )
}

BtnForChangeValueServer.propTypes = {
  index: PropTypes.number,
  updateValueOfServer: PropTypes.func,
  value: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, type, option) =>
    dispatch(updateValueOfServer(id, type, option)),
})

export default memo(connect(null, mapToDispatch)(BtnForChangeValueServer))
