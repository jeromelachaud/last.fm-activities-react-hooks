import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiConstants } from '../constants/api-constants'
import { RecentTrackWrapper } from '../styles'
import RecentTrack from './RecentTrack.js'
const { apiKey, userName } = apiConstants
const Api = async () => {
  try {
    const response = await axios({
      method: 'get',
      baseURL: 'https://ws.audioscrobbler.com/2.0',
      url: `?format=json&method=user.getrecenttracks&user=${userName}&limit=5&api_key=${apiKey}`,
    })
    return response
  } catch (error) {
    console.error(error)
  }
}

export const RecentTracks = () => {
  const [recentTracks, setRecentTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = async () => {
    setIsLoading(true)
    const response = await Api()
    setRecentTracks(response.data.recenttracks.track)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const RecentTrackElement = recentTracks.map((recentTrack, i) => (
    <RecentTrack key={i} recentTrack={recentTrack} />
  ))
  return (
    <div>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <RecentTrackWrapper>{RecentTrackElement}</RecentTrackWrapper>
      )}
    </div>
  )
}
