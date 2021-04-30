const recordChangeServerToDB = (id, type, value) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = () => {
        // а-ля запрос к серверу и запись
        return JSON.parse(localStorage.getItem('data'))
      }
      let arrayDataWhichChange = [...data()]
      arrayDataWhichChange[id][type] = 'idle'
      try {
        localStorage.setItem('data', JSON.stringify(arrayDataWhichChange))
        resolve(arrayDataWhichChange)
      } catch {
        reject('Error with record')
      }
    }, 1500)
  })

  return promise.then(
    (result) => {
      return result
    },
    (error) => {
      throw error
    },
  )
}

export { recordChangeServerToDB }
