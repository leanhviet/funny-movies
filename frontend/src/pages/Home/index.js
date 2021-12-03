// Libs
import React, { useState, useEffect } from 'react'

// Components
import { Container } from 'react-bootstrap'
import Video from '../../components/Video'
import Header from '../../components/Header'

const { REACT_APP_API_URL } = process.env

export const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    if (videos && !!!videos.length) {
      fetch(`${REACT_APP_API_URL}/api/videos`)
        .then((response) => response.json())
        .then((data) => setVideos((data.value || []).reverse()))
        .catch((err) => {
          console.log('error: ', err)
        })
    }
  })

  return (
    <>
      <Header />
      <Container>
        {(videos || []).map((video, key) => (
          <Video
            key={`key_${key}`}
            id={video.id}
            title={video.title}
            sharedBy={video.sharedBy}
            likeCount={video.likeCount}
            dislikeCount={video.dislikeCount}
            description={video.description}
          />
        ))}
      </Container>
    </>
  )
}

export default Home
