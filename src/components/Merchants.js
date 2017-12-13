import React, { Component } from 'react'
import NavComponent from './NavComponent'
import ListComponent from './ListComponent'
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap'
import { Provider, connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { toJS } from 'immutable'

const merchantsSelector = createSelector(
  state => state.get('merchants'),
  (substate) => { return substate }
)

const mapStateToProps = state => ({
  merchants: merchantsSelector(state)
})

class Main extends Component {
  constructor() {
    super()
  }
  componentDidMount() {    
  }
  render() {
    return <div>
      <NavComponent />
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={3}>
            <Panel header={"Merchant Actions"} bsStyle="info">
              {/* <small> To continue click the button below.</small><hr/> */}
              <Link to="/add"><Button bsStyle="primary" block>Create New Merchant</Button></Link>
            </Panel>
          </Col>
          <Col xs={12} md={9}>
            <ListComponent items={this.props.merchants} />
          </Col>
        </Row>
      </Grid>
    </div>
  }
}

export default connect(mapStateToProps)(Main)