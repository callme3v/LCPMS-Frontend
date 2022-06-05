import React from "react"
import {Tenants} from "../../SampleData";


const TenantPage = () => {
    return (
        <div>
            <h1> TENANTS</h1>
            <table className="table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>National ID</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Amount Paid</th>
                    <th>Entry Date</th>
                    <th>Exit Date</th>
                </tr>
                </thead>
                <tbody>
                {Tenants.map(tenant => <tr key={tenant.ID}>
                    <td>{`${tenant.ID}.`}</td>
                    <td>{tenant.firstName}</td>
                    <td>{tenant.lastName}</td>
                    <td>{tenant.gender}</td>
                    <td>{tenant.nationalId}</td>
                    <td>{tenant.phoneNumber}</td>
                    <td>{tenant.email}</td>
                    <td>{tenant.amountPaid}</td>
                    <td>{tenant.entryDate}</td>
                    <td>{tenant.exitDate}</td>
                </tr>)}
                </tbody>
            </table>

        </div>
    )
}
export default TenantPage