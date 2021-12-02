// Libs
import React from 'react'

// Components
import { Row, Col, Card } from 'react-bootstrap'

const VideoComponent = ({
  id,
  title,
  sharedBy,
  likeCount,
  dislikeCount,
  description
}) => {
  const videoSrc = `https://www.youtube.com/embed/${id}?rel=0`

  return (
    <Card style={{ marginTop: '20px' }}>
      <Row>
        <Col md={6}>
          <iframe
            title={title}
            src={videoSrc}
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{ width: '100%', height: '350px' }}
          />
        </Col>
        <Col md={6}>
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
            <Card.Text
              style={{
                display: '-webkit-box',
                '-webkit-line-clamp': '6',
                '-webkit-box-orient': 'vertical',
                maxHeight: '150px',
                overflow: 'hidden'
              }}
            >
              {description}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  )
}

export default React.memo(VideoComponent)
