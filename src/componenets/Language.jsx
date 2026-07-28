export default function Language({ languageList, setLanguageList }) {
    function addLanguage() {
        setLanguageList([...languageList, { id: crypto.randomUUID(), skill: "", }]);
    }

    function updateEntry(id, field, value) {
        setLanguageList(languageList.map((entry) => entry.id === id ? { ...entry, [field]: value } : entry));
    }

    function removeEntry(id) {
        setLanguageList(languageList.filter((entry) => entry.id !== id));
    }

    return (
        <div>
            <h1>Language</h1>
            <button onClick={addLanguage}>Add</button>
            <ul>
                {languageList.map((language) => (
                    <LanguageInfo
                        key={language.id}
                        entry={language}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                ))}
            </ul>
        </div>
    )
}

function LanguageInfo({ entry, updateEntry, removeEntry}) {
    return (
        <li>
            <input
                type="text"
                value={entry.language}
                onChange={(e) => updateEntry(entry.id, "language", e.target.value)}
            />
            <button onClick={() => removeEntry(entry.id)}>
                Remove
            </button>

        </li>
    );
}