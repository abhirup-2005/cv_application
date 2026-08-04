import FormGroup from "./FormGroup";
import DateRow from "./DateRow";

import "../../styles/Common.css";

export default function DurationInput({
    entry,
    updateEntry,
}) {

    return (

        <>

            <div className="duration-toggle">

                <button
                    type="button"
                    className={
                        entry.durationType === "date"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        updateEntry(
                            entry.id,
                            "durationType",
                            "date"
                        )
                    }
                >
                    Date Range
                </button>

                <button
                    type="button"
                    className={
                        entry.durationType === "custom"
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        updateEntry(
                            entry.id,
                            "durationType",
                            "custom"
                        )
                    }
                >
                    Custom
                </button>

            </div>

            {
                entry.durationType === "date"
                    ?

                    <>

                        <DateRow>

                            <FormGroup label="Start Date">

                                <input
                                    type="date"
                                    value={entry.startDate}
                                    onChange={(e) =>
                                        updateEntry(
                                            entry.id,
                                            "startDate",
                                            e.target.value
                                        )
                                    }
                                />

                            </FormGroup>

                            <FormGroup label="End Date">

                                <input
                                    type="date"
                                    disabled={entry.isCurrent}
                                    value={entry.endDate}
                                    onChange={(e) =>
                                        updateEntry(
                                            entry.id,
                                            "endDate",
                                            e.target.value
                                        )
                                    }
                                />

                            </FormGroup>

                        </DateRow>

                        <label className="current-checkbox">

                            <input
                                type="checkbox"
                                checked={entry.isCurrent}
                                onChange={(e) =>
                                    updateEntry(
                                        entry.id,
                                        "isCurrent",
                                        e.target.checked
                                    )
                                }
                            />

                            Present

                        </label>

                    </>

                    :

                    <FormGroup label="Duration">

                        <input
                            type="text"
                            placeholder="3 Months / 40 Hours / Summer 2025"
                            value={entry.customDuration}
                            onChange={(e) =>
                                updateEntry(
                                    entry.id,
                                    "customDuration",
                                    e.target.value
                                )
                            }
                        />

                    </FormGroup>

            }

        </>

    );

}