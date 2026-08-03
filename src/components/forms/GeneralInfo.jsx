import FormCard from "../reusables/FormCard.jsx";
import SectionTitle from "../reusables/SectionTitle.jsx";
import FormGroup from "../reusables/FormGroup.jsx";
import InputRow from "../reusables/InputRow.jsx";
import LinkCard from "../reusables/LinkCard.jsx";
import DynamicList from "../reusables/DynamicList.jsx";
import ActionButtons from "../reusables/ActionButtons.jsx";

export default function GeneralInfo({ generalInfo, setGeneralInfo, }) {
  function handleChange(field, value) {
    setGeneralInfo({ ...generalInfo, [field]: value, });
  }

  function addLink() {
    setGeneralInfo((prev) => ({
      ...prev,
      links: [...prev.links,
      {
        id: crypto.randomUUID(),
        title: "",
        url: "",
      },
      ],
    }));
  }

  function updateLink(id, field, value) {
    setGeneralInfo((prev) => ({
      ...prev,
      links: prev.links.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      ),
    }));
  }

  function removeLink(id) {
    setGeneralInfo((prev) => ({
      ...prev,
      links: prev.links.filter(
        (link) => link.id !== id
      ),
    }));
  }

  return (
    <FormCard title="General Information">

      <SectionTitle
        title="Personal Information"
        subtitle="Basic details about you"
      />

      <InputRow>

        <FormGroup label="First Name">
          <input
            type="text"
            value={generalInfo.firstName}
            onChange={(e) =>
              handleChange(
                "firstName",
                e.target.value
              )
            }
          />
        </FormGroup>

        <FormGroup label="Last Name">
          <input
            type="text"
            value={generalInfo.lastName}
            onChange={(e) =>
              handleChange(
                "lastName",
                e.target.value
              )
            }
          />
        </FormGroup>

      </InputRow>

      <SectionTitle
        title="Contact Information"
      />

      <InputRow>

        <FormGroup label="Email">
          <input
            type="email"
            value={generalInfo.email}
            onChange={(e) =>
              handleChange(
                "email",
                e.target.value
              )
            }
          />
        </FormGroup>

        <FormGroup label="Phone Number">
          <input
            type="tel"
            value={generalInfo.phone}
            onChange={(e) =>
              handleChange(
                "phone",
                e.target.value
              )
            }
          />
        </FormGroup>

      </InputRow>

      <SectionTitle
        title="Useful Links"
        subtitle="Portfolio, GitHub, LinkedIn, etc."
      />

      <DynamicList
        items={generalInfo.links}
        emptyMessage="No links added."
        renderItem={(link) => (
          <LinkCard key={link.id}>

            <InputRow>

              <FormGroup label="Link Title">
                <input
                  type="text"
                  placeholder="GitHub"
                  value={link.title}
                  onChange={(e) =>
                    updateLink(
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
                  placeholder="https://..."
                  value={link.url}
                  onChange={(e) =>
                    updateLink(
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
                  removeLink(link.id),
              }}
            />

          </LinkCard>
        )}
      />

      <ActionButtons
        primary={{
          text: "+ Add Link",
          onClick: addLink,
        }}
        align="left"
      />

    </FormCard>
  );
}