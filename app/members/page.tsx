export default function MembersPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Members</h1>

      <form className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
        />

        <select className="border p-2 w-full">
          <option>Member</option>
          <option>Admin</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Member
        </button>
      </form>
    </main>
  );
}