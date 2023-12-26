import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { getUsers } from './lib/strapi/data';

export default async function UsersList() {
  const users = await getUsers();

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users &&
          users.data.map((person: any) => (
            <li
              key={person.email}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img
                  src={person.image || 'https://via.placeholder.com/150'}
                  alt={person.username}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {person.username}
                </h3>
                {/* <p className="mt-2 text-sm text-gray-500">{person.email}</p> */}
                {/* Additional user details can go here */}
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="flex w-0 flex-1">
                    <a
                      href={`mailto:${person.email}`}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
