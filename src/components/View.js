import React, { Component } from 'react'
import NavComponent from './NavComponent'
import { Grid, Row, Col, Panel, Form, FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { createSelector } from 'reselect'
import { Field, reduxForm } from 'redux-form'
import { fromJS } from 'immutable'

const singleMerchantSelector = createSelector(
  state => state.get('singleMerchant'),
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
    
    console.log(this.props.singleMerchant)
    return (
      <div>
        <NavComponent />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Panel header={"Add a new merchant"} bsStyle="primary">
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col sm={2}>
                      Email
                </Col>
                    <Col sm={10}>                    
                      <FormControl type="email" placeholder="Email" value={""} />
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formHorizontalPassword">
                    <Col sm={2}>
                      Password
                </Col>
                    <Col sm={10}>
                      <FormControl type="password" placeholder="Password" />
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
