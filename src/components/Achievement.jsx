export default function Achievement({ achievementList, setAchievementList }) {
    function addAchievement() {
        setAchievementList([...achievementList, { id: crypto.randomUUID(), skill: "", }]);
    }

    function updateEntry(id, field, value) {
        setAchievementList(achievementList.map((entry) => entry.id === id ? { ...entry, [field]: value } : entry));
    }

    function removeEntry(id) {
        setAchievementList(achievementList.filter((entry) => entry.id !== id));
    }

    return (
        <div>
            <h1>Achievements</h1>
            <button onClick={addAchievement}>Add</button>
            <ul>
                {achievementList.map((achievement) => (
                    <AchievementInfo
                        key={achievement.id}
                        entry={achievement}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                ))}
            </ul>
        </div>
    )
}

function AchievementInfo({ entry, updateEntry, removeEntry}) {
    return (
        <li>
            <textarea
                type="text"
                value={entry.achievement}
                onChange={(e) => updateEntry(entry.id, "achievement", e.target.value)}
            ></textarea>
            <button onClick={() => removeEntry(entry.id)}>
                Remove
            </button>

        </li>
    );
}