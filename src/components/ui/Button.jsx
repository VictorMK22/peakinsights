export default function Button({ text, inverted }) {
    return (
      <button
        className={`px-6 py-3 text-sm font-medium transition ${
          inverted
            ? "bg-white text-black hover:bg-gray-200"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {text}
      </button>
    );
  }
  