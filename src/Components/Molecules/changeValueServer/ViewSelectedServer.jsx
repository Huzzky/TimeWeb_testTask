import { memo } from 'react'
import { connect } from 'react-redux'
import UserNameInViewSelectedServer from './UserNameInViewSelectedServer'
import ValuesOfServerWhichCanBeChanged from './ValuesOfServerWhichCanBeChanged'
import LabelValues from '../../Atoms/LabelValuesServer'

const ViewSelectedServer = ({ pageOpenSelectedServer, isError, isLoading }) => {
  return !pageOpenSelectedServer ? (
    isLoading ? (
      <></>
    ) : isError ? (
      <></>
    ) : (
      <div>
        <LabelValues labelText={'Выберите сервер'} />
      </div>
    )
  ) : (
    <div>
      <UserNameInViewSelectedServer />
      <ValuesOfServerWhichCanBeChanged />
    </div>
  )
}

const mapStateToProps = ({ serverListReducers }) => ({
  pageOpenSelectedServer: serverListReducers.pageOpenSelectedServer,
  isLoading: serverListReducers.isLoading,
  isError: serverListReducers.isError,
})

export default memo(connect(mapStateToProps, null)(ViewSelectedServer))
