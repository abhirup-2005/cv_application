import "../../styles/forms/Certification.css";

export default function Certificate({ certificateList, setCertificateList }) {
    function addCertificate() {
        setCertificateList([...certificateList, {
                id: crypto.randomUUID(),
                title: "",
                description: "",
                startDate: "",
                endDate: "",
                links: [{id: crypto.randomUUID(), title: "", url: "",}],
            }]);
    }

    function updateEntry(id, field, value) {
        setCertificateList(certificateList.map((certificate) => certificate.id === id ? { ...certificate, [field]: value } : certificate));
    }

    function addLink(certificateId) {
        setCertificateList(
            certificateList.map((certificate) => {
                if (certificate.id !== certificateId) return certificate;

                return {
                    ...certificate,
                    links: [
                        ...certificate.links,
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

    function updateLink(certificateId, linkId, field, value) {
        setCertificateList(certificateList.map((certificate) => {
                if (certificate.id !== certificateId) return certificate;

                return {
                    ...certificate, links: certificate.links.map((link) =>
                        link.id === linkId ? {...link, [field]: value} : link
                    )
                };
            })
        );
    }

    function removeLink(certificateId, linkId) {
        setCertificateList(
            certificateList.map((certificate) => {
                if (certificate.id !== certificateId) return certificate;

                return {
                    ...certificate, links: certificate.links.filter((link) => link.id !== linkId)
                };
            })
        );
    }

    function removeEntry(id) {
        setCertificateList(certificateList.filter((certificate) => certificate.id !== id));
    }

    return (
        <div>
            <h1>Certifications</h1>

            <button onClick={addCertificate}>
                Add Certificate
            </button>

            <ul>
                {certificateList.map((certificate) => (
                    <CertificateInfo
                        key={certificate.id}
                        entry={certificate}
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

function CertificateInfo({
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

            <h3>Certificate Links</h3>

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
                Remove Certificate
            </button>
        </li>
    );
}