import React from 'react'
import NavComponent from './NavComponent'
import { Grid, Row, Col, Panel, FieldGroup, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'
import { newMerchantAction } from '../actions'
import { connect } from 'react-redux'

function submitForm(data, dispatch) {
  dispatch(newMerchantAction(data))
}

const Main = ({ handleSubmit, pristine, reset, submitting, dispatch }) => (
  <div>
    <NavComponent />
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={12}>
          <Panel header={"Add a new merchant"} bsStyle="primary">
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
                    type="radio"
                    placeholder=""
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

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return dispatch
}

export default reduxForm({
  form: 'addform'
})(Main)
