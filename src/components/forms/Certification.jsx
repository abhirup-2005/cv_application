import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import InputRow from "../reusables/InputRow.jsx";
import DateRow from "../reusables/DateRow.jsx";
import LinkCard from "../reusables/LinkCard.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function Certificate({ certificateList, setCertificateList, }) {

    function addCertificate() {
        setCertificateList([...certificateList,
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
        setCertificateList(certificateList.map((certificate) =>
            certificate.id === id ? { ...certificate, [field]: value } : certificate
        ));
    }

    function removeEntry(id) {
        setCertificateList(certificateList.filter((certificate) => certificate.id !== id));
    }

    function addLink(certificateId) {
        setCertificateList(certificateList.map((certificate) =>
            certificate.id === certificateId ? {
                ...certificate,
                links: [
                    ...certificate.links,
                    {
                        id: crypto.randomUUID(),
                        title: "",
                        url: "",
                    },
                ],
            }
                : certificate
        ));
    }

    function updateLink(certificateId, linkId, field, value) {
        setCertificateList(certificateList.map((certificate) =>
            certificate.id === certificateId ? {
                ...certificate,
                links: certificate.links.map((link) =>
                    link.id === linkId
                        ? { ...link, [field]: value }
                        : link
                ),
            }
                : certificate
        ));
    }

    function removeLink(certificateId, linkId) {
        setCertificateList(certificateList.map((certificate) =>
            certificate.id === certificateId ? {
                ...certificate,
                links: certificate.links.filter(
                    (link) => link.id !== linkId
                ),
            }
                : certificate
        ));
    }

    return (
        <FormCard title="Certifications">

            <SectionTitle
                title="Certificates"
                subtitle="Add certificates, licenses and courses."
            />

            <DynamicList
                items={certificateList}
                emptyMessage="No certificates added."
                renderItem={(certificate) => (
                    <CertificateInfo
                        key={certificate.id}
                        entry={certificate}
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
                    text: "+ Add Certificate",
                    onClick: addCertificate,
                }}
            />

        </FormCard>
    );
}

function CertificateInfo({ entry, updateEntry, addLink, updateLink, removeLink, removeEntry, }) {
    return (
        <div className="entry-card">

            <FormGroup label="Certificate Title">
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

                <FormGroup label="Issue Date">
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

                <FormGroup label="Expiry Date">
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
                    rows={4}
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

            <SectionTitle title="Certificate Links" />

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
                    text: "Remove Certificate",
                    onClick: () =>
                        removeEntry(entry.id),
                }}
            />

        </div>
    );
}