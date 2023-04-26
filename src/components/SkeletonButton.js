import React from 'react'
import { Card, Placeholder } from 'react-bootstrap'

const SkeletonButton = () => {
    return (

        <Card style={{ width: "25%" }} className="m-3">
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={5} className="m-1" />
                <Placeholder.Button variant="primary" xs={5} />
            </Card.Body>
        </Card>

    )
}

export default SkeletonButton