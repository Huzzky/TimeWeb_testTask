import { memo } from 'react'
import { connect } from 'react-redux'
import UserNameInViewSelectedServer from './UserNameInViewSelectedServer'
import ValuesOfServerWhichCanBeChanged from './ValuesOfServerWhichCanBeChanged'
import LabelValues from '../../Atoms/LabelValuesServer'
import '../../../Assets/_selectedServer.scss'

const ViewSelectedServer = ({ pageOpenSelectedServer, isError, isLoading }) => {
  return !pageOpenSelectedServer ? (
    isLoading ? (
      <></>
    ) : isError ? (
      <></>
    ) : (
      <div className="servers-page__select-server">
        <LabelValues labelText={'Выберите сервер'} />
      </div>
    )
  ) : (
    <div className="selected-server">
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
