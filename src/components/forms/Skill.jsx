import "../../styles/forms/Skill.css";

export default function Skill({ skillList, setSkillList }) {
    function addCategory() {
        setSkillList([...skillList,
        {
            id: crypto.randomUUID(),
            category: "",
            skills: [],
        },
        ]);
    }

    function updateCategory(id, value) {
        setSkillList(skillList.map((entry) =>
            entry.id === id ? { ...entry, category: value } : entry
        ));
    }

    function removeCategory(id) {
        setSkillList(skillList.filter((entry) => entry.id !== id));
    }

    function addSkill(categoryId) {
        setSkillList(skillList.map((entry) =>
            entry.id === categoryId ? {
                ...entry, skills: [...entry.skills,
                {
                    id: crypto.randomUUID(),
                    name: "",
                },
                ],
            } : entry
        ));
    }

    function updateSkill(categoryId, skillId, value) {
        setSkillList(
            skillList.map((entry) =>
                entry.id === categoryId ? {
                    ...entry,
                    skills: entry.skills.map((skill) =>
                        skill.id === skillId
                            ? { ...skill, name: value }
                            : skill
                    ),
                }
                    : entry
            )
        );
    }

    function removeSkill(categoryId, skillId) {
        setSkillList(skillList.map((entry) =>
            entry.id === categoryId ? {
                ...entry,
                skills: entry.skills.filter(
                    (skill) => skill.id !== skillId
                ),
            }
                : entry
        )
        );
    }

    return (
        <div>
            <h1>Skills</h1>

            <button onClick={addCategory}>
                Add Category
            </button>

            <ul>
                {skillList.map((category) => (
                    <SkillInfo
                        key={category.id}
                        entry={category}
                        updateCategory={updateCategory}
                        removeCategory={removeCategory}
                        addSkill={addSkill}
                        updateSkill={updateSkill}
                        removeSkill={removeSkill}
                    />
                ))}
            </ul>
        </div>
    );
}

function SkillInfo({
    entry,
    updateCategory,
    removeCategory,
    addSkill,
    updateSkill,
    removeSkill,
}) {
    return (
        <li className="skillCategory">
            <input
                type="text"
                placeholder="Category (e.g. Languages)"
                value={entry.category}
                onChange={(e) =>
                    updateCategory(entry.id, e.target.value)
                }
            />

            <button onClick={() => removeCategory(entry.id)}>
                Remove Category
            </button>

            <button onClick={() => addSkill(entry.id)}>
                Add Skill
            </button>

            <ul>
                {entry.skills.map((skill) => (
                    <li key={skill.id}>
                        <input
                            type="text"
                            placeholder="Skill"
                            value={skill.name}
                            onChange={(e) =>
                                updateSkill(
                                    entry.id,
                                    skill.id,
                                    e.target.value
                                )
                            }
                        />

                        <button
                            onClick={() =>
                                removeSkill(entry.id, skill.id)
                            }
                        >
                            Remove Skill
                        </button>
                    </li>
                ))}
            </ul>
        </li>
    );
}