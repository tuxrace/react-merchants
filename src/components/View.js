import React, { Component } from 'react'
import NavComponent from './NavComponent'
import { Grid, Row, Col, Panel, Form, FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { createSelector } from 'reselect'
import { Field, reduxForm } from 'redux-form'
import { fromJS } from 'immutable'

const singleMerchantSelector = createSelector(
  state => state.main.singleMerchant,
  (substate) => { return substate }
)

const mapStateToProps = state => ({
  singleMerchant: singleMerchantSelector(state)
})

class View extends Component {
  componentDidMount() {
    let { dispatch } = this.props
    let action = actionCreators.loadMerchantAction(this.props.routeParams.id)
    dispatch(action)
  }
  render() {
    const userInfo = this.props.singleMerchant
    return (userInfo &&
      <div>
        <NavComponent />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Panel header={"Merchant Information"} bsStyle="primary">
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col sm={2}> First Name </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="First Name" value={userInfo.firstName} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPassword">
                    <Col sm={2}> Last Name </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Last Name" value={userInfo.lastName} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPassword">
                    <Col sm={2}> Avatar Url </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Last Name" value={userInfo.avatarUrl} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPassword">
                    <Col sm={2}> Email </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Last Name" value={userInfo.email} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPassword">
                    <Col sm={2}> Phone </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Last Name" value={userInfo.phone} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPassword">
                    <Col sm={2}> Has Premium </Col>
                    <Col sm={10}>
                      <FormControl type="text" placeholder="Last Name" value={userInfo.hasPremium} />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalPassword">                    
                    <Col sm={12}>
                      Bids
                    </Col>
                  </FormGroup>
                </Form>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps)(View)
