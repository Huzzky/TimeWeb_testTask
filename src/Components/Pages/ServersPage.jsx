import ViewSelectedServer from '../Container/changeValueServer/ViewSelectedServer'
import ServerListContainer from '../Container/serversList/ServersListContainer'

export const ServersPage = () => {
  return (
    <div>
      <ServerListContainer />
      <ViewSelectedServer />
    </div>
  )
}
