import axios from 'axios'

export function sampleRequestApi() {
  return axios.get('https://facebook.github.io/react-native/movies.json')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error
    })
}