import React from 'react';

const CancellationPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
      
      <div className="space-y-4">
        <p className="text-gray-600">
          Free cancellation for 48 hours after booking, as long as the check-in date is at least 14 days away.
        </p>
        
        <div className="space-y-2">
          <h3 className="font-semibold">Cancellation timeline:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Cancel within 48 hours of booking: <span className="font-medium text-gray-900">Full refund</span>
            </li>
            <li>
              Cancel at least 14 days before check-in: <span className="font-medium text-gray-900">Full refund minus service fee</span>
            </li>
            <li>
              Cancel between 7-14 days before check-in: <span className="font-medium text-gray-900">50% refund minus service fee</span>
            </li>
            <li>
              Cancel less than 7 days before check-in: <span className="font-medium text-gray-900">No refund</span>
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Service fees are non-refundable. All times are calculated based on the property&apos;s local time zone.
        </p>
      </div>
    </div>
  );
};

export default CancellationPolicy;