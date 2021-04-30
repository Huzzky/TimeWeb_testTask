import PropTypes from 'prop-types'
import { memo } from 'react'
import { InputWhichCanBeChanged } from '../../../const'
import BtnForCloseFieldsValuesWithoutSave from '../../Atoms/BtnForCloseFieldsValuesWithoutSave'
import BtnForSaveChangeValueServer from '../../Atoms/BtnForSaveChangeValueServer'
import InputForChangeValueServer from '../../Atoms/InputForChangeValueServer'
import SelectOptionTypesServer from '../../Atoms/SelectOptionTypesServer'

const ChangeFieldsValueServer = ({ value, index }) => {
  return (
    <div>
      {value[0] === Object.keys(InputWhichCanBeChanged)[1] ? (
        <div>
          <SelectOptionTypesServer />
          <BtnForSaveChangeValueServer value={value} index={index} />
        </div>
      ) : (
        <div>
          <InputForChangeValueServer value={value[0]} />
          <BtnForSaveChangeValueServer value={value} index={index} />
        </div>
      )}
      <BtnForCloseFieldsValuesWithoutSave value={value} index={index} />
    </div>
  )
}

ChangeFieldsValueServer.propTypes = {
  index: PropTypes.number,
  value: PropTypes.array,
}

export default memo(ChangeFieldsValueServer)
