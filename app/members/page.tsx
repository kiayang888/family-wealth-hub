import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { SectionTitle } from "@/components/SectionTitle";

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
    <div className="stack-xl">
      <SectionTitle
        title="Members"
        subtitle="Manage family investment group members and contact information."
      />

      <section className="card stack-md">
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

      <section className="card">
        <h3>Member Directory</h3>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Role</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {members?.map((member) => (
                <tr
                  key={member.id}
                  className="border-b border-[#d9e5d2] text-lg hover:bg-[#f6faf3]"
                >
                  <td className="px-6 py-6 font-medium">
                    {member.full_name}
                  </td>

                  <td className="px-6 py-6">
                    <span
                      className={
                        member.member_status === "Active"
                          ? "rounded-full px-4 py-1 text-sm font-bold bg-green-100 text-green-800"
                          : member.member_status === "Pending"
                            ? "rounded-full px-4 py-1 text-sm font-bold bg-yellow-100 text-yellow-800"
                            : member.member_status === "Inactive"
                              ? "rounded-full px-4 py-1 text-sm font-bold bg-gray-100 text-gray-700"
                              : "rounded-full px-4 py-1 text-sm font-bold bg-red-100 text-red-700"
                      }
                    >
                      {member.member_status || "Active"}
                    </span>
                  </td>

                  <td className="px-6 py-6">
                    <span className="rounded-full bg-[#e7f2e3] px-4 py-1 text-sm font-bold text-[#1f7a3a]">
                      {member.role || "Member"}
                    </span>
                  </td>

                  <td className="px-6 py-6">
                    {member.email || "-"}
                  </td>

                  <td className="px-6 py-6">
                    {member.phone || "-"}
                  </td>

                  <td className="px-6 py-6">
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
  );
}