import React from 'react'
import NavComponent from './NavComponent'
import { Grid, Row, Col, Panel, FieldGroup, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

const Main = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      <NavComponent />
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Panel header={"Add a new merchant"} bsStyle="primary">
              <form onSubmit={"handleSubmit"}>
                <div>
                  <label>First Name</label>
                  <div>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <br/>
                <div>
                  <label>Last Name</label>
                  <div>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <br/>
                <div>
                  <label>Avatar Url</label>
                  <div>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="Avatar Url"
                    />
                  </div>
                </div>
                <br/>
                <div>
                  <label>Email</label>
                  <div>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="Avatar Url"
                    />
                  </div>
                </div>
                <br/>
                <div>
                  <label>Phone</label>
                  <div>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="Avatar Url"
                    />
                  </div>
                </div>
                <br/>
                <div>
                  <label>Has Premium</label>
                  <div>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="Avatar Url"
                    />
                  </div>
                </div>
                <br/>
                <div>
                  <label>Bids</label>
                  <div>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="Avatar Url"
                    />
                  </div>
                </div>
                <br/>

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

export default reduxForm({
  form: 'addform'
})(Main)