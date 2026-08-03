import "../../styles/Common.css";

export default function DynamicList({ items, renderItem, emptyMessage = "", }) {
    if (!items.length) {
        return (
            emptyMessage && (
                <p className="dynamic-list-empty">
                    {emptyMessage}
                </p>
            )
        );
    }

    return (
        <div className="dynamic-list">
            {items.map(renderItem)}
        </div>
    );
}