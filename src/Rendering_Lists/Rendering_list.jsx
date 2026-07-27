import React from "react";

const Rendering_list = () => {

    const employees = [
        { id: 1, name: "Anjali", role: "Developer" },
        { id: 2, name: "Bhanu", role: "Testing" },
        { id: 3, name: "Charitha", role: "HR" },
        { id: 4, name: "Devaki", role: "Manager" }
    ];

    const mobiles = [
        { id: 1, name: "Vivo Y30", price: "20000" },
        { id: 2, name: "Oppo S5", price: "15000" },
        { id: 3, name: "Samsumng", price: "13000" },
        { id: 4, name: "Realme", price: "10000" }
    ];

    const students = [
        { id: 1, name: "sai", course: "React" },
        { id: 2, name: "Aruna", course: "Js" },
        { id: 3, name: "Arjun", course: "Python" }

    ];


    const expensiveProducts = mobiles.filter((product) =>
        Number(product.price) > 10000
    );

    const specificstudent = students.find((student) =>
        student.id == 3);


    // const increaseSort = [...mobiles].sort((a, b) =>
    //     a.price - b.price);

    // const decreaseSort = [...mobiles].sort((a, b) =>
    //     b.price - a.price);


    // const nameSort = [...mobiles].sort((a, b) =>
    //     a.name.localeCompare(b.name));


    const totalPrice = mobiles.reduce(
        (sum,item) => sum + Number(item.price),0
    )

    const loggedIn = true;
    
    return (
        <div>
            
           
           {loggedIn ? <h2> Welcome </h2> : <h2> Please Login </h2>}
            
        </div>
    );
};

export default Rendering_list;