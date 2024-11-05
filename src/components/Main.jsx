import React, {useState} from "react";
import Form from "./Form";
import Cards from "./Combined";

export default function Main(){
    const [money, setMoney] = useState({
        change: 0,
        twenties: 0,
        tens: 0,
        fives: 0,
        ones: 0,
        quarters: 0,
        dimes: 0,
        nickles: 0,
        pennies: 0
    });

    function calculateChange(amounts) {
        const {amountDue, amountReceived} = amounts;

        let orignalChange = (parseFloat(amountReceived) - parseFloat(amountDue)).toFixed(2);

        let change = Math.round((parseFloat(amountReceived) - parseFloat(amountDue)) * 100);

        let twenties = (change - (change % 2000)) / 2000;
        change = change % 2000;

        let tens = (change - (change % 1000)) / 1000;
        change = change % 1000;

        let fives = (change - (change % 500)) / 500;
        change = change % 500;

        let ones = (change - (change % 100)) / 100;
        change = change % 100;

        let quarters = (change - (change % 25)) / 25;
        change = change % 25;

        let dimes = (change - (change % 10)) / 10;
        change = change % 10;

        let nickles = (change - (change % 5)) / 5
        let pennies = change % 5;

        setMoney({
            change: orignalChange,
            twenties: twenties,
            tens: tens,
            fives: fives,
            ones: ones,
            quarters: quarters,
            dimes: dimes,
            nickles: nickles,
            pennies: pennies
        })
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex flex-row justify-content-center">
                <Form onCalculate={calculateChange}/>
                <Cards money={money}/>
            </div>
    </div>
    );
}