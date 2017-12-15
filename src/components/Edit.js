import React, { Component } from 'react'
import NavComponent from './NavComponent'
import { Grid, Row, Col, Panel, FieldGroup, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import * as actionCreators from '../actions'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { Link } from 'react-router'

const singleMerchantSelector = createSelector(
  state => state.main.singleMerchant,
  (substate) => { return substate }
)

const mapStateToProps = state => ({
  initialValues: singleMerchantSelector(state)
})

function submitForm(data, dispatch) {
  dispatch(actionCreators.editMerchantAction(data))
}

class Main extends Component {
  componentDidMount() {
    let { dispatch } = this.props    
    let action = actionCreators.loadMerchantAction(this.props.routeParams.id)
    dispatch(action)
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, dispatch, singleMerchant } = this.props
    return (
      <div>
        <NavComponent />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
            <p><Link to="/">Back to main</Link></p>
              <Panel header={"Edit merchant"} bsStyle="primary">
                <form onSubmit={handleSubmit(submitForm)}>
                  <div>
                    <label>First Name</label>
                    <div>
                      <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder=""                        
                      />
                    </div>
                  </div>
                  <br />
                  <div>
                    <label>Last Name</label>
                    <div>
                      <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="" />
                    </div>
                  </div>
                  <br />
                  <div>
                    <label>Avatar Url</label>
                    <div>
                      <Field
                        name="avatarUrl"
                        component="input"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <br />
                  <div>
                    <label>Email</label>
                    <div>
                      <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="" />
                    </div>
                  </div>
                  <br />
                  <div>
                    <label>Phone</label>
                    <div>
                      <Field
                        name="phone"
                        component="input"
                        type="phone"
                        placeholder="" />
                    </div>
                  </div>
                  <br />
                  <div>
                    <label>Has Premium</label>
                    <div>
                      <Field
                        name="hasPremium"
                        component="input"
                        type="checkbox"
                      />
                    </div>
                  </div>
                  <br />
                  <div>
                    <label>Bids</label>
                    <div>

                    </div>
                  </div>
                  <br />
                  <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                  </div>
                </form>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const mForm = reduxForm({
  form: 'addform'
})(Main)

export default connect(mapStateToProps)(mForm)