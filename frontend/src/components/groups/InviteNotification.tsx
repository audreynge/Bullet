export default function InviteNotification({ groupId, invitedBy, onAccept, onDecline }) {
  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-sm">
        You’ve been invited to <span className="font-semibold">Group {groupId}</span> by <span className="font-semibold">{invitedBy}</span>.
      </p>
      <div className="flex gap-3">
        <button
          onClick={onAccept}
          className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md text-sm"
        >
          Accept
        </button>
        <button
          onClick={onDecline}
          className="px-4 py-2 bg-red-600 hover:bg-red-500 rounded-md text-sm"
        >
          Decline
        </button>
      </div>
    </div>
  );
}