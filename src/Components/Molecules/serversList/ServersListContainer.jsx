import PropTypes from 'prop-types'
import { memo, useLayoutEffect } from 'react'
import { connect } from 'react-redux'
import { requestServerList } from '../../../store/action/requestServerList'
import LabelValuesServer from '../../Atoms/LabelValuesServer'
import ServerRowForList from './ServerRowForList'

const ServersListContainer = ({ requestServerList, isError, isLoading }) => {
  useLayoutEffect(() => {
    requestServerList()
  }, [requestServerList])

  return isLoading ? (
    <div className="servers-page__loading-block">
      <LabelValuesServer labelText={'Загрузка'} />
    </div>
  ) : isError ? (
    <div className="servers-page__error">
      <LabelValuesServer labelText={'Ошибка'} />
    </div>
  ) : (
    <ServerRowForList />
  )
}

ServersListContainer.propTypes = {
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  requestServerList: PropTypes.func,
}

const mapStateToProps = ({ serverListReducers }) => ({
  isLoading: serverListReducers.isLoading,
  isError: serverListReducers.isError,
})
const mapDispatchToProps = (dispatch) => ({
  requestServerList: () => dispatch(requestServerList()),
})

export default memo(
  connect(mapStateToProps, mapDispatchToProps)(ServersListContainer),
)
