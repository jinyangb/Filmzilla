import Client from './'

export const GetMovies = async () => {
  try {
    const res = await Client.get('/')
    return res.data
  } catch (error) {
    throw error
  }
}