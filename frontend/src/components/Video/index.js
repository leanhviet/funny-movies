// Libs
import React from 'react'

// Components
import { Row, Col, Card } from 'react-bootstrap'

export const VideoComponent = ({
  id,
  title,
  sharedBy,
  likeCount,
  dislikeCount,
  description
}) => {
  const videoSrc = `https://www.youtube.com/embed/${id}?rel=0`

  return (
    <Card className="video-cmp">
      <Row>
        <Col md={6} className="video-cmp__col1">
          <iframe
            title={title}
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; fullscreen"
            className="video-cmp__col1__iframe"
          />
        </Col>
        <Col md={6} className="video-cmp__col2">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>Shared by: {sharedBy}</p>
            <div>
              <span>
                {likeCount}{' '}
                <i
                  className="fa fa-thumbs-o-up"
                  aria-hidden="true"
                  style={{ marginRight: '20px' }}
                ></i>
              </span>
              <span>
                {dislikeCount}{' '}
                <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
              </span>
            </div>
            <p>Description:</p>
            <Card.Text className="video-cmp__col2__desc">
              {description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

VideoComponent.defaultProps = {
  id: '',
  title: '',
  sharedBy: '',
  likeCount: 0,
  dislikeCount: 0,
  description: ''
}

export default React.memo(VideoComponent)
