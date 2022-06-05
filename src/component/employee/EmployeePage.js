import React from "react"
import {connect} from "react-redux"
import * as employeeActions from "../../redux/actions/employeeActions.js"
import PropTypes from "prop-types"
import {bindActionCreators} from "redux"


// noinspection JSUnresolvedFunction
class EmployeePage extends React.Component {
    state = {
        employee: {
            firstName: ""
        }
    }

    handleChange = (event) => {
        const employee = {...this.state.employee, firstName: event.target.value}
        this.setState({employee})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.actions.createEmployee(this.state.employee)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Employee</h1>
                <h3>Add Employee</h3>
                <input type="text" onChange={this.handleChange} value={this.state.employee.firstName}/>
                <input type="submit" value="Save"/>
                {this.props.employees.map(employee => (
                    <div key={employee.firstName}>{employee.firstName}</div>
                ))}
            </form>
        )
    }

}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(employeeActions, dispatch)
    }
}

EmployeePage.propTypes = {
    employees : PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)