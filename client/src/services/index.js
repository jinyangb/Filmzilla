import Axios from 'axios'
import { BASE_URL } from '../components/globals'

const Client = Axios.create({ baseURL: `${BASE_URL}` })

export default Client