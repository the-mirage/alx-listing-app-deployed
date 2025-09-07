import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import axios from "axios";
import { useState } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [bookingDetails] = useState({
    propertyName: "Sample Property",
    checkIn: new Date(),
    checkOut: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    guests: 2,
    price: 150,
    total: 1050,
    bookingFee: 50,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (err) {
      setError("Failed to submit booking. Please try again.");
      console.error("Booking error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <form onSubmit={handleSubmit}>
            <BookingForm 
              formData={formData}
              onChange={handleInputChange}
              loading={loading}
            />
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? "Processing..." : "Confirm & Pay"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>
        <div className="space-y-6">
          <OrderSummary bookingDetails={bookingDetails} />
          <CancellationPolicy />
        </div>
      </div>
    </div>
  );
}