import "../../styles/Common.css";

export default function FormGroup({ label, htmlFor, required = false, children, }) {
    return (
        <div className="form-group">
            {label && (
                <label htmlFor={htmlFor} className="form-label">
                    {label}

                    {required && (<span className="required">*</span>)}
                </label>
            )}

            {children}
        </div>
    );
}