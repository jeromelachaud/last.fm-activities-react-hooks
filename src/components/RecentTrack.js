import PropTypes from 'prop-types'
import React, { Component } from 'react'
import lastfm_placeholder from '../assets/cover-album-placeholder.svg'
import {
  RecentTrackImage,
  RecentTrackInfoList,
  RecentTrackLink,
} from '../styles'

class RecentTrack extends Component {
  render() {
    const { recentTrack } = this.props

    const { artist, album, image, name, url } = recentTrack
    console.log('artist', artist)
    console.log('album', album)
    console.log('image', image)
    console.log('name', image)
    console.log('url', url)
    const imageApiResponse = image['3']['#text']
    console.log(
      'TCL: RecentTrack -> render -> imageApiResponse',
      imageApiResponse
    )

    let dateElement
    let imageSource
    if (imageApiResponse.length !== 0) {
      imageSource = imageApiResponse
    } else {
      imageSource = lastfm_placeholder
    }

    return (
      <RecentTrackLink href={url}>
        <RecentTrackImage src={imageSource} alt={name} />
        <RecentTrackInfoList>
          <li>
            <strong>{artist['#text']}</strong>
          </li>
          <li>{name}</li>
          <li>
            <em>{album['#text']}</em>
          </li>
          {dateElement}
        </RecentTrackInfoList>
      </RecentTrackLink>
    )
  }
}

RecentTrack.propTypes = {
  recentTrack: PropTypes.object.isRequired,
}

export default RecentTrack
