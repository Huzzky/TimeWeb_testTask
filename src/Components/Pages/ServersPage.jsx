import ViewSelectedServer from '../Molecules/changeValueServer/ViewSelectedServer'
import ServerListContainer from '../Molecules/serversList/ServersListContainer'
import '../../Assets/_serversPage.scss'

export const ServersPage = () => {
  return (
    <div className="servers-page">
      <ServerListContainer />
      <ViewSelectedServer />
    </div>
  )
}
