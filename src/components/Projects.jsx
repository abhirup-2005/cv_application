export default function Project({ projectList, setProjectList }) {
    function addProject() {
        setProjectList([...projectList, {
                id: crypto.randomUUID(),
                title: "",
                description: "",
                startDate: "",
                endDate: "",
                links: [{id: crypto.randomUUID(), title: "", url: "",}],
            }]);
    }

    function updateEntry(id, field, value) {
        setProjectList(projectList.map((project) => project.id === id ? { ...project, [field]: value } : project));
    }

    function addLink(projectId) {
        setProjectList(
            projectList.map((project) => {
                if (project.id !== projectId) return project;

                return {
                    ...project,
                    links: [
                        ...project.links,
                        {
                            id: crypto.randomUUID(),
                            title: "",
                            url: "",
                        },
                    ],
                };
            })
        );
    }

    function updateLink(projectId, linkId, field, value) {
        setProjectList(projectList.map((project) => {
                if (project.id !== projectId) return project;

                return {
                    ...project, links: project.links.map((link) =>
                        link.id === linkId ? {...link, [field]: value} : link
                    )
                };
            })
        );
    }

    function removeLink(projectId, linkId) {
        setProjectList(
            projectList.map((project) => {
                if (project.id !== projectId) return project;

                return {
                    ...project, links: project.links.filter((link) => link.id !== linkId)
                };
            })
        );
    }

    function removeEntry(id) {
        setProjectList(projectList.filter((project) => project.id !== id));
    }

    return (
        <div>
            <h1>Projects</h1>

            <button onClick={addProject}>
                Add Project
            </button>

            <ul>
                {projectList.map((project) => (
                    <ProjectInfo
                        key={project.id}
                        entry={project}
                        updateEntry={updateEntry}
                        addLink={addLink}
                        updateLink={updateLink}
                        removeLink={removeLink}
                        removeEntry={removeEntry}
                    />
                ))}
            </ul>
        </div>
    );
}

function ProjectInfo({
    entry,
    updateEntry,
    addLink,
    updateLink,
    removeLink,
    removeEntry,
}) {
    return (
        <li>
            <label>
                Title:
                <input
                    type="text"
                    value={entry.title}
                    onChange={(e) =>
                        updateEntry(entry.id, "title", e.target.value)
                    }
                />
            </label>

            <label>
                Description:
                <textarea
                    value={entry.description}
                    onChange={(e) =>
                        updateEntry(
                            entry.id,
                            "description",
                            e.target.value
                        )
                    }
                />
            </label>

            <label>
                Start Date:
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
            </label>

            <label>
                End Date:
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
            </label>

            <h3>Project Links</h3>

            {entry.links.map((link) => (
                <div
                    key={link.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        marginBottom: "10px",
                    }}
                >
                    <label>
                        Link Title:
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
                    </label>

                    <label>
                        URL:
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
                    </label>

                    <button
                        type="button"
                        onClick={() =>
                            removeLink(entry.id, link.id)
                        }
                    >
                        Remove Link
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={() => addLink(entry.id)}
            >
                Add Link
            </button>

            <button
                type="button"
                onClick={() => removeEntry(entry.id)}
            >
                Remove Project
            </button>
        </li>
    );
}