import Client from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get('/movies')
    return res.data
  } catch (error) {
    throw error
  }
}

export const DelMovie = async () => {
  try {
    await Client.delete('/movies/:movie_id')
    console.log('test')
  } catch (error) {
    throw error
  }
}