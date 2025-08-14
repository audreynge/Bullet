export default function GroupInvite({ setShowGroupInvite }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-sm w-full">
        <h1 className="text-lg font-semibold mb-4">Your group ID is:</h1>
        <p className="mb-6">123456</p>
        <button
          onClick={() => setShowGroupInvite(false)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
