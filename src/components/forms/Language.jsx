import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function Language({ languageList, setLanguageList, }) {

    function addLanguage() {
        setLanguageList([...languageList,
        {
            id: crypto.randomUUID(),
            language: "",
        },
        ]);
    }

    function updateEntry(id, value) {
        setLanguageList(languageList.map((language) =>
            language.id === id ? {
                ...language,
                language: value,
            }
                : language
        )
        );
    }

    function removeEntry(id) {
        setLanguageList(languageList.filter(
            (language) => language.id !== id
        )
        );
    }

    return (
        <FormCard title="Languages">

            <SectionTitle
                title="Languages"
                subtitle="Mention languages you know."
            />

            <DynamicList
                items={languageList}
                emptyMessage="No languages added."
                renderItem={(language) => (
                    <LanguageInfo
                        key={language.id}
                        entry={language}
                        updateEntry={updateEntry}
                        removeEntry={removeEntry}
                    />
                )}
            />

            <ActionButtons
                align="left"
                primary={{
                    text: "+ Add Language",
                    onClick: addLanguage,
                }}
            />

        </FormCard>
    );
}

function LanguageInfo({ entry, updateEntry, removeEntry, }) {
    return (
        <div className="entry-card">

            <FormGroup label="Language">
                <input
                    type="text"
                    placeholder="English"
                    value={entry.language}
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
                    text: "Remove Language",
                    onClick: () =>
                        removeEntry(entry.id),
                }}
            />

        </div>
    );
}