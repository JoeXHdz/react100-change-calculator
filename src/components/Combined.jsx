import React, { useState } from "react";

// Card Component
function Card(props) {
    return (
        <div className="col-3 text-center">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
}


export default function Cards(props) {
    const { change, twenties, tens, fives, ones, quarters, dimes, nickles, pennies } = props.money;

    return (
        <div className="col-6 m-2 column-background bg-light rounded-2">
            <div className={change >= 0 ? "alert alert-success text-center my-3" : "alert alert-danger text-center my-3"} role="alert">
                The total change due is ${change}
            </div>
            <div className="row my-3 d-flex flex-row justify-content-center">
                <Card title="Twenties" content={twenties} />
                <Card title="Tens" content={tens} />
                <Card title="Fives" content={fives} />
                <Card title="Ones" content={ones} />
            </div>
            <div className="row my-3 d-flex flex-row justify-content-center">
                <Card title="Quarters" content={quarters} />
                <Card title="Dimes" content={dimes} />
                <Card title="Nickles" content={nickles} />
                <Card title="Pennies" content={pennies} />
            </div>
        </div>
    );
}