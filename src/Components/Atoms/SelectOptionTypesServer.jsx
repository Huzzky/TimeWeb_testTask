import { memo } from 'react'
import { connect } from 'react-redux'
import { typesOfServer } from '../../const'

const SelectOptionTypesServer = ({ isLoading }) => {
  let optionServerTypeArray = typesOfServer.map((value, index) => {
    return (
      <option key={index} value={value}>
        {value}
      </option>
    )
  })
  return (
    <select disabled={isLoading ? 'disabled' : ''}>
      {optionServerTypeArray}
    </select>
  )
}
const mapStateToProps = ({ serverListReducers }) => ({
  isLoading: serverListReducers.isLoadingRequestToChangeValueServer,
})

export default memo(connect(mapStateToProps)(SelectOptionTypesServer))
