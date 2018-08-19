import config from './config'

const { apiKey } = config
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:contry&api_key=${apiKey}&format=json`

export default function getArtists(country) {
  const url = URL.replace(':contry', country)
  return fetch(url)
  	.then(res => res.json())
  	.then(json => json.topartists.artist)
}
