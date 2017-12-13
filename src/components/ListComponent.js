import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router'

const ListComponent = ({ items }) => (
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Test</th>
        <th>Test</th>
      </tr>
    </thead>
    <tbody>
      {items.toJS().map((item, i) => (<tr key={i}><td>{item.id}</td><td><Link to={`/view/${item.id}`}>{item.firstName} {item.lastName}</Link> </td><td><Link to="/edit/{}"> Edit</Link></td><td></td></tr>))}
    </tbody>
  </Table>
)

export default ListComponent
