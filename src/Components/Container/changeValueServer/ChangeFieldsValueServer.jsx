import PropTypes from 'prop-types'
import { memo } from 'react'
import { connect } from 'react-redux'
import { InputWhichCanBeChanged, optionInputWichChange } from '../../../const'
import { updateValueOfServer } from '../../../store/action/updateValuesOfServer'

const ChangeFieldsValueServer = ({ value, index, updateValueOfServer }) => {
  console.log(value, Object.keys(InputWhichCanBeChanged)[1])
  return (
    <div>
      {value[0] === Object.keys(InputWhichCanBeChanged)[1] ? (
        <select>
          <option value="123">123</option>
          <option value="321">321</option>
          <option value="436">412</option>
        </select>
      ) : (
        <input></input>
      )}
      <button
        onClick={() => {
          updateValueOfServer(index, value[0], optionInputWichChange[1])
        }}
      >
        ok
      </button>
    </div>
  )
}

ChangeFieldsValueServer.propTypes = {
  index: PropTypes.number,
  updateValueOfServer: PropTypes.func,
  value: PropTypes.array,
}

const mapToDispatch = (dispatch) => ({
  updateValueOfServer: (id, type, option) =>
    dispatch(updateValueOfServer(id, type, option)),
})

export default memo(connect(null, mapToDispatch)(ChangeFieldsValueServer))
