import "../../styles/forms/Skill.css";

export default function Skill({ skillList, setSkillList }) {
    function addSkill() {
        setSkillList([...skillList, { id: crypto.randomUUID(), skill: "", }]);
    }

    function updateEntry(id, field, value) {
        setSkillList(skillList.map((entry) => entry.id === id ? { ...entry, [field]: value } : entry));
    }

    function removeEntry(id) {
        setSkillList(skillList.filter((entry) => entry.id !== id));
    }

    return (
        <div>
            <h1>Skills</h1>
            <button onClick={addSkill}>Add</button>
            <ul>
                {skillList.map((skill) => (
                    <SkillInfo
                        key={skill.id}
                        entry={skill}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                ))}
            </ul>
        </div>
    )
}

function SkillInfo({ entry, updateEntry, removeEntry }) {
    return (
        <li>
            <input
                type="text"
                value={entry.skill}
                onChange={(e) => updateEntry(entry.id, "skill", e.target.value)}
            />

            <button onClick={() => removeEntry(entry.id)}>
                Remove
            </button>

        </li>
    );
}