import { useState } from "react"

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {

    function handleFirstName(e) {
        setGeneralInfo({ ...generalInfo, firstName: e.target.value });
    }

    function handleLastName(e) {
        setGeneralInfo({ ...generalInfo, lastName: e.target.value });
    }

    function handleEmail(e) {
        setGeneralInfo({ ...generalInfo, email: e.target.value });
    }

    function handlePhone(e) {
        setGeneralInfo({ ...generalInfo, phone: e.target.value });
    }

    return (
        <div className="generalInfo">
            <h1>General Information: </h1>
            <div>
                <fieldset>
                    <legend>Name: </legend>
                    <lable>
                        First Name:{" "}
                        <input type="text" onChange={handleFirstName}></input>
                    </lable>
                    <label>
                        Last Name:{" "}
                        <input type="text" onChange={handleLastName}></input>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Contact Information: </legend>
                    <label>
                        Email:{" "}
                        <input type="email" onChange={handleEmail}></input>
                    </label>
                    <label>
                        Phone No.:{" "}
                        <input type="number" onChange={handlePhone}></input>
                    </label>
                </fieldset>
            </div>
        </div>
    )
}