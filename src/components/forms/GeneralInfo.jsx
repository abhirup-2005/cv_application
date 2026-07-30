import "../../styles/forms/General.css";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {

    function handleChange(field, value) {
        setGeneralInfo({ ...generalInfo, [field]: value });
    }

    return (
        <div className="generalInfo">
            <h1>General Information:</h1>

            <fieldset>
                <legend>Name:</legend>

                <label>
                    First Name:
                    <input
                        type="text"
                        value={generalInfo.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        type="text"
                        value={generalInfo.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Contact Information:</legend>

                <label>
                    Email:
                    <input
                        type="email"
                        value={generalInfo.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </label>

                <label>
                    Phone No.:
                    <input
                        type="tel"
                        value={generalInfo.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Social:</legend>

                <label>
                    Linked In:
                    <input
                        type="text"
                        value={generalInfo.linkedIn}
                        onChange={(e) => handleChange("linkedIn", e.target.value)}
                    />
                </label>

                <label>
                    Github:
                    <input
                        type="text"
                        value={generalInfo.github}
                        onChange={(e) => handleChange("github", e.target.value)}
                    />
                </label>
            </fieldset>

            <label>
                Portfolio:
                <input
                    type="text"
                    value={generalInfo.portfolio}
                    onChange={(e) => handleChange("portfolio", e.target.value)}
                />
            </label>
        </div>
    );
}