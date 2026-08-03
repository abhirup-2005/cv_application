import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import InputRow from "../reusables/InputRow.jsx";
import DateRow from "../reusables/DateRow.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function PracticalExperience({ workList, setWorkList, }) {
    function addWork() {
        setWorkList([...workList,
        {
            id: crypto.randomUUID(),
            companyName: "",
            position: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
        },
        ]);
    }

    function updateEntry(id, field, value) {
        setWorkList(workList.map((work) =>
            work.id === id ? { ...work, [field]: value } : work
        )
        );
    }

    function removeEntry(id) {
        setWorkList(workList.filter((work) => work.id !== id));
    }

    return (
        <FormCard title="Work Experience">

            <SectionTitle
                title="Professional Experience"
                subtitle="Add internships, jobs or freelance work."
            />

            <DynamicList
                items={workList}
                emptyMessage="No work experience added."
                renderItem={(work) => (
                    <WorkInfo
                        key={work.id}
                        entry={work}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Experience",
                    onClick: addWork,
                }}
            />

        </FormCard>
    );
}

function WorkInfo({ entry, updateEntry, removeEntry, }) {
    return (
        <div className="work-card">

            <InputRow>

                <FormGroup label="Company Name">
                    <input
                        type="text"
                        value={entry.companyName}
                        onChange={(e) =>
                            updateEntry(
                                entry.id,
                                "companyName",
                                e.target.value
                            )
                        }
                    />
                </FormGroup>

                <FormGroup label="Position">
                    <input
                        type="text"
                        value={entry.position}
                        onChange={(e) =>
                            updateEntry(
                                entry.id,
                                "position",
                                e.target.value
                            )
                        }
                    />
                </FormGroup>

            </InputRow>

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

            <FormGroup label="Responsibilities">
                <textarea
                    rows={5}
                    placeholder="Write one responsibility per line..."
                    value={entry.responsibilities}
                    onChange={(e) =>
                        updateEntry(
                            entry.id,
                            "responsibilities",
                            e.target.value
                        )
                    }
                />
            </FormGroup>

            <ActionButtons
                secondary={{
                    text: "Remove Experience",
                    onClick: () =>
                        removeEntry(entry.id),
                }}
            />

        </div>
    );
}