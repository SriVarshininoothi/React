import React, { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";

const RandomuserGenerator = () => {
    //state

    const [users, setUser] = useState(null);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState("");
    
 
    
    //fetch data
        const RandomUser = async () => {
            
                setloading(true);
                setError("");
            try {

                const response = await fetch("https://randomuser.me/api/");
                const data = await response.json();
                setUser(data.results[0]);

            } catch (error) {

                setError("Failed to fetch user data");

            }
            finally {

                setloading(false);

            }

        };
        
        useEffect(() => {

             RandomUser();

        },[]);

    if (loading) {

        return (
            <div className="d-flex justify-content-center text-center my-5">

                <OrbitProgress variant="dotted" color="#4194a9" size="medium" text="loading" textColor="" />
            </div>
        )

    }

    if (error) {
        return (<h2 className="text-center" style={{ color: "red" }}>{error}</h2>
        )
    }

    return (


        <div className="container text-center my-4">
            <h2 className="mb-4">Random User Geneator</h2>
            {
                users && (

                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4">

                            <div className="card h-100">

                                <img
                                    src={users.picture.large}
                                    alt={users.name.first}
                                    height="300" width="100%"
                                    style={{objectFit:"cover"}}
                                />

                                <div className="card-body">
           
                                    <h2>{users.name.title} {users.name.first} {users.name.last}</h2>
                                    <p>Gender: <strong> {users.gender}</strong></p>
                                    <p>Email: <strong> {users.email}</strong></p>
                                    <p>Phone: <strong>{users.phone}</strong></p>
                                    <p>Country: <strong>{users.location.country}</strong></p>

                                    <button className="btn btn-primary w-100" onClick={RandomUser}>New User</button>


                                </div>


                            </div>
                        </div>


                    </div>
                )
            }

        </div>
    )

}
export default RandomuserGenerator;