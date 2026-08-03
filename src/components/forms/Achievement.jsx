import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function Achievement({
    achievementList,
    setAchievementList,
}) {
    function addAchievement() {
        setAchievementList([ ...achievementList, {
                id: crypto.randomUUID(),
                achievement: "",
            },]);
    }

    function updateEntry(id, value) {
        setAchievementList( achievementList.map((achievement) =>
                achievement.id === id ? { ...achievement, achievement: value, } : achievement
            ));
    }

    function removeEntry(id) {
        setAchievementList( achievementList.filter( (achievement) => achievement.id !== id ));
    }

    return (
        <FormCard title="Achievements">

            <SectionTitle
                title="Achievements & Awards"
                subtitle="Mention notable accomplishments."
            />

            <DynamicList
                items={achievementList}
                emptyMessage="No achievements added."
                renderItem={(achievement) => (
                    <AchievementInfo
                        key={achievement.id}
                        entry={achievement}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Achievement",
                    onClick: addAchievement,
                }}
            />

        </FormCard>
    );
}

function AchievementInfo({ entry, updateEntry, removeEntry, }) {
    return (
        <div className="entry-card">

            <FormGroup label="Achievement">
                <textarea
                    rows={4}
                    placeholder="Describe your achievement..."
                    value={entry.achievement}
                    onChange={(e) =>
                        updateEntry(
                            entry.id,
                            e.target.value
                        )
                    }
                />
            </FormGroup>

            <ActionButtons
                secondary={{
                    text: "Remove Achievement",
                    onClick: () =>
                        removeEntry(entry.id),
                }}
            />

        </div>
    );
}