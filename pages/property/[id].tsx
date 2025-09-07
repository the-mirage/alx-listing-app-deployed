import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import axios from "axios";

const PropertyDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const fetchProperty = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`
      );
      setProperty(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Property", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) {
      fetchProperty();
    }
  }, [id]);

  /*  useEffect(() => {
    if (id) {
      fetch(`/api/property/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProperty(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching property:", error);
          setLoading(false);
        });
    }
  }, [id]);
*/
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Property not found</p>
      </div>
    );
  }

  // Calculate sample booking details (static for now)
  const nightlyRate = property.price;
  const nights = 7;
  const subtotal = nightlyRate * nights;
  const serviceFee = Math.round(subtotal * 0.12); // 12% service fee
  const weeklyDiscount = property.discount
    ? Math.round(subtotal * (parseInt(property.discount) / 100))
    : 0;
  const total = subtotal + serviceFee - weeklyDiscount;

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-semibold mb-2">{property.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 37 35"
                fill="#FAC02B"
              >
                <path d="M17.1044 2.60318C17.6447 1.51821 19.187 1.50262 19.7491 2.57645L24.1844 11.0507L34.5946 12.9634C35.5128 13.1321 35.8517 14.2713 35.1751 14.9145L28.2151 21.5306L29.5194 32.8088C29.6258 33.7291 28.6501 34.3865 27.8371 33.9423L18.4006 28.7859L9.01381 33.9151C8.19144 34.3645 7.20771 33.6868 7.3345 32.7583L8.86762 21.5306L1.69235 14.9265C0.997719 14.2871 1.33461 13.1289 2.2638 12.962L12.8983 11.0507L17.1044 2.60318Z" />
              </svg>
              <span className="text-lg">{property.rating}</span>
            </div>
            <span>·</span>
            <span className="text-gray-600">
              {property.address.city}, {property.address.country}
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Left side - Image */}
        <div>
          <div className="relative rounded-xl overflow-hidden h-[400px]">
            <Image
              src={property.image}
              alt={property.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {property.discount && (
              <div className="absolute top-4 left-4 bg-[#2CC39B] text-white px-3 py-1 rounded-full z-10">
                {property.discount}% OFF
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 border border-[#E9E9E9] rounded-xl px-2 py-1">
              <div className="flex items-center">
                <Image
                  src="/assets/images/bed.png"
                  alt="Bed"
                  width={16}
                  height={16}
                />
                <span className="pl-1">{property.offers.bed}</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/images/bathtub.png"
                  alt="Shower"
                  width={15}
                  height={15}
                />
                <span className="pl-1">{property.offers.shower}</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/images/people.png"
                  alt="Occupants"
                  width={16}
                  height={16}
                />
                <span className="pl-1">{property.offers.occupants}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Booking Form */}
        <div>
          <div
            className="relative max-w-[400px] mx-auto"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {showTooltip && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
                This booking form is currently static
              </div>
            )}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-2xl font-bold">${property.price}</span>
                  <span className="text-gray-600">/night</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 37 35"
                    fill="#FAC02B"
                  >
                    <path d="M17.1044 2.60318C17.6447 1.51821 19.187 1.50262 19.7491 2.57645L24.1844 11.0507L34.5946 12.9634C35.5128 13.1321 35.8517 14.2713 35.1751 14.9145L28.2151 21.5306L29.5194 32.8088C29.6258 33.7291 28.6501 34.3865 27.8371 33.9423L18.4006 28.7859L9.01381 33.9151C8.19144 34.3645 7.20771 33.6868 7.3345 32.7583L8.86762 21.5306L1.69235 14.9265C0.997719 14.2871 1.33461 13.1289 2.2638 12.962L12.8983 11.0507L17.1044 2.60318Z" />
                  </svg>
                  <span>{property.rating}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="border border-gray-300 rounded-lg p-3">
                  <p className="text-xs font-medium">CHECK-IN</p>
                  <p className="text-gray-600">Add date</p>
                </div>
                <div className="border border-gray-300 rounded-lg p-3">
                  <p className="text-xs font-medium">CHECKOUT</p>
                  <p className="text-gray-600">Add date</p>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-4 space-y-4 mb-4">
                <div className="flex justify-between">
                  <span>
                    ${property.price} x {nights} nights
                  </span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service fee</span>
                  <span>${serviceFee}</span>
                </div>
                {weeklyDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Weekly discount</span>
                    <span>-${weeklyDiscount}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between font-bold mb-6">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button className="w-full bg-[#34967C] text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors">
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">About this place</h2>
        <p className="text-gray-600 leading-relaxed">{property.description}</p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {property.category.map((cat, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetail;
