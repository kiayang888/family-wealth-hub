import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export default async function MembersPage() {
  async function addMember(formData: FormData) {
    "use server";

    const full_name = formData.get("full_name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;

    const { error } = await supabase.from("members").insert({
      full_name,
      email,
      role,
    });

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/members");
  }

  const { data: members } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Members</h1>

      <form action={addMember} className="space-y-4 mb-8">
        <input
          name="full_name"
          type="text"
          placeholder="Full Name"
          required
          className="border p-2 w-full rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
        />

        <select name="role" className="border p-2 w-full rounded">
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Member
        </button>
      </form>

      <div className="space-y-3">
        {members?.map((member) => (
          <div key={member.id} className="border p-3 rounded">
            <p className="font-semibold">{member.full_name}</p>
            <p>{member.email}</p>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}