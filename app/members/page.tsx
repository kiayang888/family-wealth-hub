import { supabase } from "@/lib/supabase";

async function addMember(formData: FormData) {
  "use server";

  const full_name = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const role = formData.get("role") as string;

  if (!full_name) {
    throw new Error("Full name is required");
  }

  const { error } = await supabase.from("members").insert([
    {
      full_name,
      email,
      phone,
      address,
      role,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }
}

export default async function MembersPage() {
  const { data: members } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Members</h1>
          <p className="mt-2 text-gray-600">
            Add and manage family investment group members.
          </p>
        </div>

        <section className="mb-10 rounded-xl bg-white p-6 shadow-sm border">
          <h2 className="mb-6 text-xl font-semibold text-gray-800">
            Add New Member
          </h2>

          <form action={addMember} className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="full_name"
                type="text"
                required
                placeholder="Enter full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Enter phone number"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                name="address"
                type="text"
                placeholder="Enter address"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="role"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <option value="Member">Member</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white hover:bg-blue-700"
              >
                Add Member
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-xl bg-white shadow-sm border overflow-hidden">
          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Member List
            </h2>
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-100 text-sm uppercase text-gray-600">
              <tr>
                <th className="px-6 py-3">Full Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Address</th>
                <th className="px-6 py-3">Role</th>
              </tr>
            </thead>

            <tbody>
              {members?.map((member) => (
                <tr key={member.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {member.full_name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {member.email || "-"}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {member.phone || "-"}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {member.address || "-"}
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      {member.role || "Member"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {(!members || members.length === 0) && (
            <div className="p-8 text-center text-gray-500">
              No members added yet.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}