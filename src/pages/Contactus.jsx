import { useEffect, useState } from "react";

const popularPlans = [
    {
        id: "pop_monthly",
        label: "₹13,999 / MONTH",
        price: 13999,
        displayName: "Popular Monthly",
    },
    {
        id: "pop_3",
        label: "₹29,999 / 3 MONTHS",
        price: 29999,
        displayName: "Popular 3 Months",
    },
    {
        id: "pop_6",
        label: "₹55,000 / 6 MONTHS",
        price: 55000,
        displayName: "Popular 6 Months",
        save: "25%",
    },
    {
        id: "pop_12",
        label: "₹80,000 / 12 MONTHS",
        price: 80000,
        displayName: "Popular 12 Months",
        save: "50%",
    },
];

const diamondPlans = [
    {
        id: "dia_monthly",
        label: "₹19,999 / MONTH",
        price: 19999,
        displayName: "Diamond Monthly",
    },
    {
        id: "dia_3",
        label: "₹51,000 / 3 MONTHS",
        price: 51000,
        displayName: "Diamond 3 Months",
    },
    {
        id: "dia_6",
        label: "₹85,000 / 6 MONTHS",
        price: 85000,
        displayName: "Diamond 6 Months",
        save: "25%",
    },
    {
        id: "dia_12",
        label: "₹1,21,000 / 12 MONTHS",
        price: 121000,
        displayName: "Diamond 12 Months",
        save: "50%",
    },
];

export default function ContactUs() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        if (!selectedPlan) {
            alert("Please select a plan");
            return;
        }

        const payload = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            course: selectedPlan.displayName,
            courseTitle: selectedPlan.displayName,
            formHeading: "Plan Enquiry",
            type: "connect",
            policy: true,
        };

        try {
            setLoading(true);

            const res = await fetch(`${API_URL}/api/forms/submit`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error();

            alert("Form submitted successfully");
            form.reset();
            setSelectedPlan(null);
        } catch {
            alert("Submission failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 font-publicSans  sm:mt-[calc(var(--header-height))] mt-[calc(var(--header-height,80px)+40px)]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-xl shadow space-y-4"
                >
                    <h2 className="text-2xl font-semibold">Contact Us</h2>

                    <input
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border p-3 rounded-lg"
                    />

                    {selectedPlan && (
                        <div className="bg-blue-50 p-3 rounded-lg text-sm">
                            Selected Plan: <strong>{selectedPlan.displayName}</strong>
                        </div>
                    )}

                    <button
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>

                <div className="space-y-6">
                    <PlanSection
                        title="Popular Plans"
                        plans={popularPlans}
                        selectedPlan={selectedPlan}
                        onSelect={setSelectedPlan}
                    />

                    <PlanSection
                        title="Diamond Plans"
                        plans={diamondPlans}
                        selectedPlan={selectedPlan}
                        onSelect={setSelectedPlan}
                    />
                </div>
            </div>
        </div>
    );
}

function PlanSection({ title, plans, selectedPlan, onSelect }) {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        onClick={() => onSelect(plan)}
                        className={`border p-4 rounded-xl cursor-pointer transition ${selectedPlan?.id === plan.id
                                ? "border-blue-600 bg-blue-50"
                                : "hover:border-gray-400"
                            }`}
                    >
                        <p className="font-semibold">{plan.displayName}</p>
                        <p className="text-sm text-gray-600">{plan.label}</p>
                        {plan.save && (
                            <span className="text-xs text-green-600">
                                Save {plan.save}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
