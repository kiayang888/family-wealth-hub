import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

async function addMember(formData: FormData) {
  "use server";

  const full_name = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const role = formData.get("role") as string;
  const member_status = formData.get("member_status") as string;

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
      member_status,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/members");
}

export default async function MembersPage() {
  const { data: members } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#f6faf3] px-4 py-6 text-[#06191d] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            Members
          </h1>
          <p className="mt-5 text-2xl text-[#53615e]">
            Manage family investment group members and contact information.
          </p>
        </div>

        <section className="mb-10 rounded-3xl border border-[#d9e5d2] bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold">
            Add New Member
          </h2>

          <form action={addMember} className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#53615e]">
                Full Name
              </label>
              <input
                name="full_name"
                type="text"
                required
                placeholder="Enter full name"
                className="w-full rounded-xl border border-[#d9e5d2] bg-[#fbfdf9] px-4 py-3 text-lg outline-none focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#53615e]">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-xl border border-[#d9e5d2] bg-[#fbfdf9] px-4 py-3 text-lg outline-none focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#53615e]">
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-[#d9e5d2] bg-[#fbfdf9] px-4 py-3 text-lg outline-none focus:border-green-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#53615e]">
                Role
              </label>

              <select
                name="role"
                defaultValue="Member"
                className="w-full rounded-xl border border-[#d9e5d2] bg-[#fbfdf9] px-4 py-3 text-lg outline-none focus:border-green-700"
              >
                <option value="Member">Member</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Viewer">Viewer</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#53615e]">
                Member Status
              </label>

              <select
                name="member_status"
                defaultValue="Active"
                className="w-full rounded-xl border border-[#d9e5d2] bg-[#fbfdf9] px-4 py-3 text-lg outline-none focus:border-green-700"
              >
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-[#53615e]">
                Address
              </label>

              <input
                name="address"
                type="text"
                placeholder="Enter member address"
                className="w-full rounded-xl border border-[#d9e5d2] bg-[#fbfdf9] px-4 py-3 text-lg outline-none focus:border-green-700"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-xl bg-[#1f7a3a] px-8 py-3 text-lg font-bold text-white shadow-sm hover:bg-[#17612e]"
              >
                Add Member
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-3xl border border-[#d9e5d2] bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold">
            Member Directory
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left">
              <thead>
                <tr className="border-b border-[#d9e5d2] text-sm uppercase tracking-wide text-[#53615e]">
                  <th className="px-5 py-4">Name</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Role</th>
                  <th className="px-5 py-4">Email</th>
                  <th className="px-5 py-4">Phone</th>
                  <th className="px-5 py-4">Address</th>
                </tr>
              </thead>

              <tbody>
                {members?.map((member) => (
                  <tr
                    key={member.id}
                    className="border-b border-[#d9e5d2] text-lg hover:bg-[#f6faf3]"
                  >
                    <td className="px-5 py-5 font-medium">
                      {member.full_name}
                    </td>

                    <td className="px-5 py-5">
                      <span
                        className={`rounded-full px-4 py-1 text-sm font-bold
                ${member.member_status === "Active"
                            ? "bg-green-100 text-green-800"
                            : member.member_status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : member.member_status === "Inactive"
                                ? "bg-gray-100 text-gray-700"
                                : "bg-red-100 text-red-700"
                          }`}
                      >
                        {member.member_status || "Active"}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      <span className="rounded-full bg-[#e7f2e3] px-4 py-1 text-sm font-bold text-[#1f7a3a]">
                        {member.role || "Member"}
                      </span>
                    </td>

                    <td className="px-5 py-5">
                      {member.email || "-"}
                    </td>

                    <td className="px-5 py-5">
                      {member.phone || "-"}
                    </td>

                    <td className="px-5 py-5">
                      {member.address || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {(!members || members.length === 0) && (
            <div className="py-12 text-center text-xl text-[#53615e]">
              No members added yet.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}