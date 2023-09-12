import React from 'react'

function Employee() {
  return (
    <div>
      <div className='row'>
        <div className='col-9'>
          <h2 className='text-primary text-left'>Employee List</h2>
        </div>
        <div className='col-3'>
          <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#newModal">
            Add New Employee
          </button>
        </div>
      </div>
      <div className='container rounded border p-2 m-2'>
        <table className='table table-bordered table-stripped table-active'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Api fetch */}
          </tbody>
        </table>
      </div>
  
      <div className="modal" id="newModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-info">
              <h5 className="modal-title">New Employee</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='form-group-row'>
                <label for="textName" className='col-4'>Name</label>
                <div className='col-8'>
                  <input id='textName' type='text' name='name'className='form-control'/>
                </div>
              </div>
              <div className='form-group-row'>
                <label for="textAddress" className='col-4'>Address</label>
                <div className='col-8'>
                  <input id='textAddress' type='text' name='address'className='form-control'/>
                </div>
              </div>   <div className='form-group-row'>
                <label for="textSalary" className='col-4'>Salary</label>
                <div className='col-8'>
                  <input id='textSalary' type='text' name='salary'className='form-control'/>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  
  
  
}

export default Employee