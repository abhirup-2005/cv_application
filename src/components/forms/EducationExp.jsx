import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import InputRow from "../reusables/InputRow.jsx";
import DateRow from "../reusables/DateRow.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function EducationalExperience({ educationList, setEducationList, }) {
    function addEducation() {
        setEducationList([...educationList,
        {
            id: crypto.randomUUID(),
            schoolName: "",
            study: "",
            place: "",
            startDate: "",
            endDate: "",
        },
        ]);
    }

    function updateEntry(id, field, value) {
        setEducationList(educationList.map((entry) =>
            entry.id === id ? { ...entry, [field]: value } : entry
        ));
    }

    function removeEntry(id) {
        setEducationList(educationList.filter((entry) => entry.id !== id));
    }

    return (
        <FormCard title="Education">

            <SectionTitle
                title="Educational Qualifications"
                subtitle="Add all your schools, colleges and universities."
            />

            <DynamicList
                items={educationList}
                emptyMessage="No education added."
                renderItem={(education) => (
                    <EducationInfo
                        key={education.id}
                        entry={education}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Education",
                    onClick: addEducation,
                }}
            />

        </FormCard>
    );
}

function EducationInfo({ entry, updateEntry, removeEntry, }) {
    return (
        <div className="education-card">

            <InputRow>

                <FormGroup label="School / University">
                    <input
                        type="text"
                        value={entry.schoolName}
                        onChange={(e) =>
                            updateEntry(
                                entry.id,
                                "schoolName",
                                e.target.value
                            )
                        }
                    />
                </FormGroup>

                <FormGroup label="Place">
                    <input
                        type="text"
                        value={entry.place}
                        onChange={(e) =>
                            updateEntry(
                                entry.id,
                                "place",
                                e.target.value
                            )
                        }
                    />
                </FormGroup>

            </InputRow>

            <FormGroup label="Degree / Course (Include CGPA/Percentage if desired)">
                <input
                    type="text"
                    value={entry.study}
                    onChange={(e) =>
                        updateEntry(
                            entry.id,
                            "study",
                            e.target.value
                        )
                    }
                />
            </FormGroup>

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

            <ActionButtons
                secondary={{
                    text: "Remove Education",
                    onClick: () =>
                        removeEntry(entry.id),
                }}
            />

        </div>
    );
}