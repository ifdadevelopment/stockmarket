import { useEffect, useState } from "react";

const API_URL =
  import.meta.env.VITE_APP_ENV === "production"
    ? import.meta.env.VITE_APP_BACKEND || "https://stock.banarasdigitalsolution.com"
    : import.meta.env.VITE_APP_BACKEND || "http://localhost:9000";

export default function FormListPage() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const res = await fetch(`${API_URL}/api/forms/all`);
      const data = await res.json();
      setForms(data.forms || []);
    } catch (err) {
      console.error("Failed to load forms");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading form data...</p>;
  }

  return (
    <div className="overflow-x-auto font-publicSans">
      <h2 className="text-2xl font-semibold mb-4">Form Enquiries</h2>

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 border">Name</th>
            <th className="px-4 py-3 border">Email</th>
            <th className="px-4 py-3 border">Phone</th>
            <th className="px-4 py-3 border">Plan</th>
            <th className="px-4 py-3 border">Type</th>
            <th className="px-4 py-3 border">Date</th>
          </tr>
        </thead>

        <tbody>
          {forms.map((form) => (
            <tr key={form._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{form.name}</td>
              <td className="px-4 py-2 border">{form.email}</td>
              <td className="px-4 py-2 border">{form.phone}</td>
              <td className="px-4 py-2 border font-medium">
                {form.courseTitle}
              </td>
              <td className="px-4 py-2 border">{form.formHeading}</td>
              <td className="px-4 py-2 border text-sm text-gray-600">
                {new Date(form.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
