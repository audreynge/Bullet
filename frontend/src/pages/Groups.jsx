import { useState } from 'react';
import GroupInvite from '../components/groups/GroupInvite';
import InviteNotification from '../components/groups/InviteNotification';

const groups = [
  { id: 1, name: 'group 1', members: 4, img: '' },
  { id: 2, name: 'group 2', members: 6, img: '' },
  { id: 3, name: 'group 3', members: 3, img: '' },
];

export default function Groups() {
  const [search, setSearch] = useState('');
  const [showGroupInvite, setShowGroupInvite] = useState(false);

  // Example pending invite
  const [pendingInvite, setPendingInvite] = useState({
    groupId: 42,
    invitedBy: 'Alice Johnson'
  });

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAccept = () => {
    console.log(`Accepted invite to group ${pendingInvite.groupId}`);
    setPendingInvite(null);
  };

  const handleDecline = () => {
    console.log(`Declined invite to group ${pendingInvite.groupId}`);
    setPendingInvite(null);
  };

  return (
    <>
      {/* Popup modal */}
      {showGroupInvite && (
        <GroupInvite setShowGroupInvite={setShowGroupInvite} />
      )}

      <div className="pt-[100px] p-14 max-w-md">
        {/* Pending invite notification */}
        {pendingInvite && (
          <InviteNotification
            groupId={pendingInvite.groupId}
            invitedBy={pendingInvite.invitedBy}
            onAccept={handleAccept}
            onDecline={handleDecline}
          />
        )}

        <h2 className="text-2xl font-semibold mb-6">Select a Group</h2>

        <div className="mb-8">
          <input
            type="search"
            placeholder="Search groups"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full rounded-md bg-gray-800/50 placeholder-gray-400 py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <section className="mb-12">
          <h3 className="text-lg font-medium mb-4">Your Groups</h3>
          <ul>
            {filteredGroups.map(group => (
              <li
                key={group.id}
                className="flex items-center gap-4 py-3 cursor-pointer hover:bg-gray-700 rounded-md px-3"
              >
                <img
                  src={group.img}
                  alt={`${group.name} group`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{group.name}</p>
                  <p className="text-sm text-gray-400">{group.members} members</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-4">Invite Friends</h3>
          <button
            type="button"
            className="flex items-center gap-3 rounded-md bg-gray-700 px-4 py-3 hover:bg-gray-600 transition"
            onClick={() => setShowGroupInvite(true)}
          >
            <span
              aria-hidden="true"
              className="inline-block w-7 h-7 border-2 border-gray-400 rounded-md flex justify-center items-center text-2xl leading-none select-none"
            >
              +
            </span>
            <span>Invite friends to a new group</span>
          </button>
        </section>
      </div>
    </>
  );
}