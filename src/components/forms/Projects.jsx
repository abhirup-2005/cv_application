import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import InputRow from "../reusables/InputRow.jsx";
import DateRow from "../reusables/DateRow.jsx";
import LinkCard from "../reusables/LinkCard.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function Project({
    projectList,
    setProjectList,
}) {

    function addProject() {
        setProjectList([...projectList,
        {
            id: crypto.randomUUID(),
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            links: [
                {
                    id: crypto.randomUUID(),
                    title: "",
                    url: "",
                },
            ],
        },
        ]);
    }

    function updateEntry(id, field, value) {
        setProjectList(projectList.map((project) =>
            project.id === id ? { ...project, [field]: value } : project
        ));
    }

    function removeEntry(id) {
        setProjectList(projectList.filter((project) => project.id !== id));
    }

    function addLink(projectId) {
        setProjectList(projectList.map((project) =>
            project.id === projectId ? {
                ...project,
                links: [
                    ...project.links,
                    {
                        id: crypto.randomUUID(),
                        title: "",
                        url: "",
                    },
                ],
            }
                : project
        ));
    }

    function updateLink(projectId, linkId, field, value) {
        setProjectList(projectList.map((project) =>
            project.id === projectId ? {
                ...project,
                links: project.links.map((link) =>
                    link.id === linkId ? { ...link, [field]: value } : link
                ),
            }
                : project
        ));
    }

    function removeLink(projectId, linkId) {
        setProjectList(projectList.map((project) =>
            project.id === projectId ? {
                ...project,
                links: project.links.filter(
                    (link) => link.id !== linkId
                ),
            }
                : project
        ));
    }

    return (
        <FormCard title="Projects">

            <SectionTitle
                title="Projects"
                subtitle="Highlight your best work."
            />

            <DynamicList
                items={projectList}
                emptyMessage="No projects added."
                renderItem={(project) => (
                    <ProjectInfo
                        key={project.id}
                        entry={project}
                        updateEntry={updateEntry}
                        addLink={addLink}
                        updateLink={updateLink}
                        removeLink={removeLink}
                        removeEntry={removeEntry}
                    />
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Project",
                    onClick: addProject,
                }}
            />

        </FormCard>
    );
}

function ProjectInfo({ entry, updateEntry, addLink, updateLink, removeLink, removeEntry, }) {

    return (
        <div className="entry-card">

            <FormGroup label="Project Title">
                <input
                    type="text"
                    value={entry.title}
                    onChange={(e) =>
                        updateEntry(
                            entry.id,
                            "title",
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

            <FormGroup label="Description">
                <textarea
                    rows={5}
                    placeholder="Write one point per line..."
                    value={entry.description}
                    onChange={(e) =>
                        updateEntry(
                            entry.id,
                            "description",
                            e.target.value
                        )
                    }
                />
            </FormGroup>

            <SectionTitle
                title="Project Links"
            />

            <DynamicList
                items={entry.links}
                emptyMessage="No links added."
                renderItem={(link) => (
                    <LinkCard key={link.id}>

                        <InputRow>

                            <FormGroup label="Link Title">
                                <input
                                    type="text"
                                    value={link.title}
                                    onChange={(e) =>
                                        updateLink(
                                            entry.id,
                                            link.id,
                                            "title",
                                            e.target.value
                                        )
                                    }
                                />
                            </FormGroup>

                            <FormGroup label="URL">
                                <input
                                    type="url"
                                    value={link.url}
                                    onChange={(e) =>
                                        updateLink(
                                            entry.id,
                                            link.id,
                                            "url",
                                            e.target.value
                                        )
                                    }
                                />
                            </FormGroup>

                        </InputRow>

                        <ActionButtons
                            secondary={{
                                text: "Remove Link",
                                onClick: () =>
                                    removeLink(
                                        entry.id,
                                        link.id
                                    ),
                            }}
                        />

                    </LinkCard>
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Link",
                    onClick: () =>
                        addLink(entry.id),
                }}
            />

            <ActionButtons
                secondary={{
                    text: "Remove Project",
                    onClick: () =>
                        removeEntry(entry.id),
                }}
            />

        </div>
    );
}