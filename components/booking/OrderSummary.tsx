import Image from 'next/image';

interface BookingDetails {
  propertyName: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  price: number;
  total: number;
  bookingFee: number;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const totalNights = Math.ceil((bookingDetails.checkOut.getTime() - bookingDetails.checkIn.getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>
      <div className="flex items-center mt-4">
        <div className="relative w-32 h-32">
          <Image
            src="/assets/images/property-placeholder.jpg"
            alt={bookingDetails.propertyName}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {bookingDetails.checkIn.toLocaleDateString()} • {totalNights} Nights
          </p>
        </div>
      </div>
  
      {/* Price Breakdown */}
      <div className="mt-6">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingDetails.bookingFee}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Subtotal</p>
          <p>${bookingDetails.price}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p>Grand Total</p>
          <p>${bookingDetails.total}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;