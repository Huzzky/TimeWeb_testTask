import { memo } from 'react'
import { typesOfServer } from '../../const'

const SelectOptionTypesServer = () => {
  let optionServerTypeArray = typesOfServer.map((value, index) => {
    return (
      <option key={index} value={value}>
        {value}
      </option>
    )
  })
  return <select>{optionServerTypeArray}</select>
}

export default memo(SelectOptionTypesServer)
