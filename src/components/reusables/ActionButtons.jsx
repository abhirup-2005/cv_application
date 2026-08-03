import "../../styles/Common.css";

export default function ActionButtons({ primary, secondary, align = "right", }) {
    return (
        <div className={`action-buttons ${align}`}>

            {secondary && (
                <button
                    type={secondary.type || "button"}
                    className="btn btn-secondary"
                    onClick={secondary.onClick}
                >
                    {secondary.text}
                </button>
            )}

            {primary && (
                <button
                    type={primary.type || "button"}
                    className="btn btn-primary"
                    onClick={primary.onClick}
                >
                    {primary.text}
                </button>
            )}

        </div>
    );
}