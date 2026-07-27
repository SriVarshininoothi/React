import React from 'react';

const EmployeeCard = ({ name, role }) => {
    return (
        // The parent wrapper now manages the centering using flexbox
        <div style={{ display: "flex", justifyContent: "center", width: "100%", margin: "10px 0" }}>
            <div className="card" style={{ width: "19rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">{role}</a>
                </div>
            </div>
        </div>
    );
}

export default EmployeeCard;