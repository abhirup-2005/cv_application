import "../../styles/forms/General.css";

export default function GeneralInfo({ generalInfo, setGeneralInfo }) {

    function handleChange(field, value) {
        setGeneralInfo({ ...generalInfo, [field]: value });
    }

    function addLink() {
        setGeneralInfo(prev => ({
            ...prev, links: [...prev.links,
            {
                id: crypto.randomUUID(),
                title: "",
                url: "",
            },
            ],
        }));
    }

    function updateLink(id, field, value) {
        setGeneralInfo(prev => ({ ...prev, links: prev.links.map(link => link.id === id ? { ...link, [field]: value } : link), }));
    }

    function removeLink(id) {
        setGeneralInfo(prev => ({ ...prev, links: prev.links.filter(link => link.id !== id), }));
    }

    return (
        <div className="generalInfo">
            <h1>General Information:</h1>

            <fieldset>
                <legend>Name:</legend>

                <label>
                    First Name:
                    <input
                        type="text"
                        value={generalInfo.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        type="text"
                        value={generalInfo.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Contact Information:</legend>

                <label>
                    Email:
                    <input
                        type="email"
                        value={generalInfo.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </label>

                <label>
                    Phone No.:
                    <input
                        type="tel"
                        value={generalInfo.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Useful Links:</legend>
                <button type="button" onClick={addLink}>
                    + Add Link
                </button>

                {generalInfo.links.map(link => (
                    <div key={link.id}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={link.title}
                            onChange={(e) =>
                                updateLink(link.id, "title", e.target.value)
                            }
                        />

                        <input
                            type="url"
                            placeholder="URL"
                            value={link.url}
                            onChange={(e) =>
                                updateLink(link.id, "url", e.target.value)
                            }
                        />

                        <button
                            type="button"
                            onClick={() => removeLink(link.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </fieldset>
        </div>
    );
}