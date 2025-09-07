import React from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  billingAddress: string;
}

interface BookingFormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ formData, onChange, loading }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Guest Information</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            disabled={loading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            disabled={loading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          disabled={loading}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChange}
          disabled={loading}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-6">Payment Information</h2>
      
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={onChange}
          disabled={loading}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={onChange}
            disabled={loading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={onChange}
            disabled={loading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">Billing Address</label>
        <input
          type="text"
          id="billingAddress"
          name="billingAddress"
          value={formData.billingAddress}
          onChange={onChange}
          disabled={loading}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
    </div>
  );
};

export default BookingForm;