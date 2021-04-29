export const serverListStart = () => {
  let data
  try {
    data = JSON.parse(localStorage.getItem('data'))
  } catch {
    data = [
      {
        customer_id: 'user1',
        server_name: 'server7',
        server_type: 'vds',
      },
      {
        customer_id: 'user5',
        server_name: 'server2',
        server_type: 'dedicated',
      },
      {
        customer_id: 'user3',
        server_name: 'server4',
        server_type: 'hosting',
      },
    ]
    localStorage.setItem('data', JSON.stringify(data))
  }
  return data
}
