
import axios from "axios"

const MATCHING_ENDPOINT = "https://34.117.253.13/matching/api"
const API_SUBMIT = process.env.MATCHING_API_SUBMIT || "/match/submit"
const API_CANCEL = process.env.REACT_APP_MATCHING_API_CANCEL || "/api/match/cancel"

export const postMatchRequest = async (userObj, difficulty) => {
  var user = {
    email: userObj.data.email,
    displayName: userObj.data.name
  }
  return axios.post(`${MATCHING_ENDPOINT}${API_SUBMIT}`, {user, difficulty})
  .then(res => {
    console.log(res)
    return res.data
  })
  .catch(err => {
    console.log(err)
    return null
  })
}

export const cancelMatchRequest = async (requestId) => {
  return axios.put(
    `${MATCHING_ENDPOINT}${API_CANCEL}`,
    {requestId}
  ).then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

}

