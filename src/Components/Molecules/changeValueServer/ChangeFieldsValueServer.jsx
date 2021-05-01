import PropTypes from 'prop-types'
import { memo } from 'react'
import { InputWhichCanBeChanged } from '../../../const'
import BtnForCloseFieldsValuesWithoutSave from '../../Atoms/BtnForCloseFieldsValuesWithoutSave'
import BtnForSaveChangeValueServer from '../../Atoms/BtnForSaveChangeValueServer'
import InputForChangeValueServer from '../../Atoms/InputForChangeValueServer'
import SelectOptionTypesServer from '../../Atoms/SelectOptionTypesServer'

const ChangeFieldsValueServer = ({ value, index }) => {
  return (
    <>
      {value[0] === Object.keys(InputWhichCanBeChanged)[1] ? (
        <div className="selected-server__change-container change-container">
          <SelectOptionTypesServer />
          <BtnForSaveChangeValueServer
            className="change-container__btn-close--save"
            value={value}
            index={index}
          />
          <BtnForCloseFieldsValuesWithoutSave
            className="change-container__btn-close--without-save"
            value={value}
            index={index}
          />
        </div>
      ) : (
        <div className="selected-server__change-container change-container">
          <InputForChangeValueServer value={value[0]} />
          <BtnForSaveChangeValueServer
            className="change-container__btn-close--save"
            value={value}
            index={index}
          />
          <BtnForCloseFieldsValuesWithoutSave
            className="change-container__btn-close--without-save"
            value={value}
            index={index}
          />
        </div>
      )}
    </>
  )
}

ChangeFieldsValueServer.propTypes = {
  index: PropTypes.number,
  value: PropTypes.array,
}

export default memo(ChangeFieldsValueServer)
