export default function MeetingsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Meetings</h1>

      <form className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="Meeting Title"
          className="border p-2 w-full"
        />

        <input
          type="date"
          className="border p-2 w-full"
        />

        <textarea
          placeholder="Notes"
          className="border p-2 w-full h-32"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Meeting
        </button>
      </form>
    </main>
  );
}