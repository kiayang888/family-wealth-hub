import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export default async function MeetingsPage() {
  async function addMeeting(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const meeting_date = formData.get("meeting_date") as string;
    const notes = formData.get("notes") as string;

    const { error } = await supabase.from("meetings").insert({
      title,
      meeting_date,
      notes,
    });

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/meetings");
  }

  const { data: meetings } = await supabase
    .from("meetings")
    .select("*")
    .order("meeting_date", { ascending: false });

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Meetings</h1>

      <form action={addMeeting} className="space-y-4 mb-8">
        <input
          name="title"
          type="text"
          placeholder="Meeting Title"
          required
          className="border p-2 w-full rounded"
        />

        <input
          name="meeting_date"
          type="date"
          required
          className="border p-2 w-full rounded"
        />

        <textarea
          name="notes"
          placeholder="Notes"
          className="border p-2 w-full h-32 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Meeting
        </button>
      </form>

      <div className="space-y-3">
        {meetings?.map((meeting) => (
          <div key={meeting.id} className="border p-3 rounded">
            <p className="font-semibold">{meeting.title}</p>
            <p>{meeting.meeting_date}</p>
            <p className="text-sm text-gray-600">{meeting.notes}</p>
          </div>
        ))}
      </div>
    </main>
  );
}