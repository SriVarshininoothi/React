import React from "react";
import pic from "../assets/pic.jpg"

const StudentCard = (props) => {

    return (

        <div style={{display:"flex",justifyContent:"center",marginTop:"23px"}}>

            <div className="card" style={{width:"18rem"}}>
                <img src={pic} className="card-img-top" alt="..." style={{width:"auto",height:"200px",border:"2px solid black", borderRadius:"2px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.RollNumber}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Course: {props.Course}</li>
                        <li className="list-group-item">College: {props.College}</li>
                        <li className="list-group-item">Percentage: {props.Percentage}</li>
                    </ul>
                    <div className="card-body">
                        <a href="https://www.linkedin.com/in/noothi-srivarshini-918ba5240/" className="card-link">LinkedIn</a>
                        <a href="https://github.com/" className="card-link">GitHub</a>
                    </div>
            </div>
        </div>

    )


}
export default StudentCard;