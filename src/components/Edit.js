import React from 'react'
import NavComponent from './NavComponent'
import {Grid, Row, Col} from 'react-bootstrap'

const Main = (props) => (
  <div>
    <NavComponent />
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
        {console.log(props)}
        </Col>        
      </Row>
    </Grid>
  </div>
)

export default Main