import Client from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get('/movies')
    console.log('test')
    return res.data
  } catch (error) {
    throw error
  }
}