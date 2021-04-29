import { typesOfServer } from '../../const'

export const SelectOptionTypesServer = () => {
  let optionServerTypeArray = typesOfServer.map((value, index) => {
    return (
      <option key={index} value={value}>
        {value}
      </option>
    )
  })
  return <select>{optionServerTypeArray}</select>
}
