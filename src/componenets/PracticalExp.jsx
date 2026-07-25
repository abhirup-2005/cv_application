function WorkInfo({ entry, updateEntry, removeEntry }) {
    return (
        <li>
            <label>
                Company Name:
                <input
                    type="text"
                    value={entry.companyName}
                    onChange={(e) => updateEntry(entry.id, "companyName", e.target.value)}
                />
            </label>

            <label>
                Position:
                <input
                    type="text"
                    value={entry.position}
                    onChange={(e) => updateEntry(entry.id, "position", e.target.value)}
                />
            </label>

            <label>
                Responsibilities:
                <input
                    type="text"
                    value={entry.responsibilities}
                    onChange={(e) => updateEntry(entry.id, "responsibilities", e.target.value)}
                />
            </label>

            <label>
                start Date:
                <input
                    type="date"
                    value={entry.startDate}
                    onChange={(e) => updateEntry(entry.id, "startDate", e.target.value)}
                />
            </label>

            <label>
                End Date:
                <input
                    type="date"
                    value={entry.endDate}
                    onChange={(e) => updateEntry(entry.id, "endDate", e.target.value)}
                />
            </label>

            <button onClick={() => removeEntry(entry.id)}>
                Remove
            </button>
        </li>
    );
}

export default function PracticalExperience({ workList, setWorkList }) {
    function addWork() {
        setWorkList(
            [...workList, 
                { id: crypto.randomUUID(), companyName: "", position: "", responsibilities: "", startDate: "", endDate: ""}
            ]
        );
    }

    function updateEntry(id, field, value) {
        setWorkList(workList.map((work) => work.id === id ? { ...work, [field]: value } : work));
    }

    function removeEntry(id) {
        setWorkList(workList.filter((work) => work.id !== id));
    }
    return (
        <div>
            <h1>Practical Experience</h1>
            <button onClick={addWork}>Add</button>
            <ul>
                {workList.map((work) => (
                    <WorkInfo
                        key={work.id}
                        entry={work}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                ))}
            </ul>
        </div>
    )
}