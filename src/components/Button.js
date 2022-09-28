export default function Button({ children, handler, className }) {
    return (
        <button
            className={`${className} px-3 py-2 rounded shadow`}
            onClick={handler}
        >
            {children}
        </button>
    );
}
