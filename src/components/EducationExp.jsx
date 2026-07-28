function EducationalInfo({ entry, updateEntry, removeEntry, showRemove }) {
    return (
        <li>
            <label>
                School Name:
                <input
                    type="text"
                    value={entry.schoolName}
                    onChange={(e) => updateEntry(entry.id, "schoolName", e.target.value)}
                />
            </label>

            <label>
                Study:
                <input
                    type="text"
                    value={entry.study}
                    onChange={(e) => updateEntry(entry.id, "study", e.target.value)}
                />
            </label>

            <label>
                Date:
                <input
                    type="date"
                    value={entry.date}
                    onChange={(e) => updateEntry(entry.id, "date", e.target.value)}
                />
            </label>

            {showRemove && (
                <button onClick={() => removeEntry(entry.id)}>
                    Remove
                </button>
            )}
        </li>
    );
}

export default function EducationalExperience({ educationList, setEducationList }) {
    function addEducation() {
        setEducationList([...educationList, { id: crypto.randomUUID(), schoolName: "", study: "", date: "", }]);
    }

    function updateEntry(id, field, value) {
        setEducationList(educationList.map((entry) => entry.id === id ? { ...entry, [field]: value } : entry));
    }

    function removeEntry(id) {
        setEducationList(educationList.filter((entry) => entry.id !== id));
    }

    return (
        <div>
            <h1>Educational Experience</h1>
            <button onClick={addEducation}>Add</button>
            <ul>
                {educationList.map((education) => (
                    <EducationalInfo
                        key={education.id}
                        entry={education}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                        showRemove={educationList.length > 1}
                    />
                ))}
            </ul>
        </div>
    );
}