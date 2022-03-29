/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
          <div aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item fw-bold">Dashboard</li>
                <li className="breadcrumb-item">Dashboard</li>
            </ol>
        </div>

        <div>
        <h4 className="fw-bold">Dashboard</h4>

        <div className="my-4">
            <h6 className="text-label">List User</h6>
            <table className="myTable" className="table">
                <thead className="table-light">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Car</th>
                    <th scope="col">Start Rent</th>
                    <th scope="col">Finish Rent</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                { this.props.items.map(function(e){  
                    return <tr>
                        <td>{ e.no } </td>
                        <td>{ e.email}</td>
                        <td>{ e.cars }</td>
                        <td>{ e.start }</td>
                        <td>{ e.finish }</td>
                        <td>{ e.price }</td>
                        <td>{ e.status }</td>
                    </tr>
                })}
                
                </tbody>
            </table>
        </div>

        <div className="my-4">
            <h6 className="text-label">List Car</h6>
            <table className="myTable" className="table">
                <thead className="table-light">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Start Rent</th>
                    <th scope="col">Finish Rent</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Updated at</th>
                </tr>
                </thead>
                <tbody>
                { this.props.item.map(function(e){  
                    return <tr>
                        <td>{ e.no } </td>
                        <td>{ e.nama }</td>
                        <td>{ e.kategori }</td>
                        <td>{ e.harga }</td>
                        <td>{ e.start }</td>
                        <td>{ e.finish }</td>
                        <td>{ e.create }</td>
                        <td>{ e.update }</td>
                    </tr>
                })}
                
                
                </tbody>
            </table>
        </div>


        </div>

      </div>
    )
  }
}
