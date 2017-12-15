import React, { Component } from 'react'
import NavComponent from './NavComponent'
import ListComponent from './ListComponent'
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap'
import { Provider, connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { deleteMerchantAction } from '../actions'

const merchantsSelector = createSelector(
  state => state.main.merchants,
  (substate) => substate
)

const mapStateToProps = state => ({
  merchants: merchantsSelector(state)
})

const Main = ({ merchants }) => (
  <div>    
    <NavComponent />
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={3}>
          <Panel header="Merchant Actions" bsStyle="info">            
            <Link to="/add"><Button bsStyle="primary" block>Create New Merchant</Button></Link>
          </Panel>
        </Col>
        <Col xs={12} md={9}>
          <ListComponent items={JSON.parse(merchants)} delete="deleteMerchantAction"/>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default connect(mapStateToProps)(Main)
