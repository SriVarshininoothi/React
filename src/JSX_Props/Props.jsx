import React from 'react'
import EmployeeCard from './EmployeeCard'
import StudentCard from './StudentCard'


const Props = () => {

    const name = "React"
    const age = 18


    return (

        <div>

            <h1 className="title">Jsx & Props</h1>

            <EmployeeCard name="Charan" role="Testing" />

            <StudentCard name="Srivarshini" RollNumber="201RH3456" Course="React" College="ABC" Percentage="80.5" />

    

        </div>

    )
}

export default Props;