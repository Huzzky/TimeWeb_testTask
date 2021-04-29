import { memo } from 'react'
import { connect } from 'react-redux'
import UserNameInViewSelectedServer from './UserNameInViewSelectedServer'
import ValuesOfServerWhichCanBeChanged from './ValuesOfServerWhichCanBeChanged'

const ViewSelectedServer = ({
  pageOpenSelectedServer,
  selectedServer,
  isError,
  isLoading,
}) => {
  return !pageOpenSelectedServer ? (
    isLoading ? (
      <></>
    ) : isError ? (
      <></>
    ) : (
      <div>
        <h1>Выберите сервер</h1>
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
  selectedServer: serverListReducers.selectedServer,
})

export default memo(connect(mapStateToProps, null)(ViewSelectedServer))
