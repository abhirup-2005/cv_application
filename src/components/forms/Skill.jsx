import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function Skill({ skillList, setSkillList, }) {
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
        setSkillList(skillList.map((category) =>
            category.id === id ? { ...category, category: value } : category
        ));
    }

    function removeCategory(id) {
        setSkillList(skillList.filter((category) => category.id !== id));
    }

    function addSkill(categoryId) {
        setSkillList(skillList.map((category) =>
            category.id === categoryId ? {
                ...category,
                skills: [...category.skills,
                {
                    id: crypto.randomUUID(),
                    name: "",
                },
                ],
            }
                : category
        ));
    }

    function updateSkill(categoryId, skillId, value) {
        setSkillList(skillList.map((category) =>
            category.id === categoryId ? {
                ...category,
                skills: category.skills.map((skill) =>
                    skill.id === skillId ? { ...skill, name: value } : skill
                ),
            }
                : category
        ));
    }

    function removeSkill(categoryId, skillId) {
        setSkillList(skillList.map((category) =>
            category.id === categoryId ? {
                ...category,
                skills: category.skills.filter(
                    (skill) => skill.id !== skillId
                ),
            }
                : category
        ));
    }

    return (
        <FormCard title="Skills">

            <SectionTitle
                title="Technical Skills"
                subtitle="Organize your skills into categories."
            />

            <DynamicList
                items={skillList}
                emptyMessage="No skill categories added."
                renderItem={(category) => (
                    <SkillCategory
                        key={category.id}
                        entry={category}
                        updateCategory={updateCategory}
                        removeCategory={removeCategory}
                        addSkill={addSkill}
                        updateSkill={updateSkill}
                        removeSkill={removeSkill}
                    />
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Category",
                    onClick: addCategory,
                }}
            />

        </FormCard>
    );
}

function SkillCategory({ entry, updateCategory, removeCategory, addSkill, updateSkill, removeSkill, }) {
    return (
        <div className="entry-card">

            <FormGroup label="Category Name">
                <input
                    type="text"
                    placeholder="Programming Languages"
                    value={entry.category}
                    onChange={(e) =>
                        updateCategory(
                            entry.id,
                            e.target.value
                        )
                    }
                />
            </FormGroup>

            <DynamicList
                items={entry.skills}
                emptyMessage="No skills added."
                renderItem={(skill) => (
                    <div
                        className="skill-item"
                        key={skill.id}
                    >
                        <input
                            type="text"
                            placeholder="React"
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
                            type="button"
                            className="btn btn-secondary"
                            onClick={() =>
                                removeSkill(
                                    entry.id,
                                    skill.id
                                )
                            }
                        >
                            Remove
                        </button>
                    </div>
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Skill",
                    onClick: () =>
                        addSkill(entry.id),
                }}
            />

            <ActionButtons
                secondary={{
                    text: "Remove Category",
                    onClick: () =>
                        removeCategory(entry.id),
                }}
            />

        </div>
    );
}