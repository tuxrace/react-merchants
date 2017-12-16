import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router'
import EditIcon from './EditIcon'
import TrashIcon from './TrashIcon'
import { connect } from 'react-redux'
import { deleteMerchantAction } from '../actions'

const ListComponent = ({ items, dispatch }) => (
  <Table responsive striped>        
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>          
      {items.map((item, i) => (<tr key={i}><td><img className="round" src={item.avatarUrl}/></td><td><Link to={`/view/${item.id}`}>{item.firstName} {item.lastName}</Link> </td><td>  <Link to={`/edit/${item.id}`}> <EditIcon /></Link></td><td><a className="clickable" onClick={() => dispatch(deleteMerchantAction(item))}><TrashIcon /></a></td></tr>))}
    </tbody>
  </Table>
)

export default connect()(ListComponent)
