// app/lawyer/[id]/page.jsx

import React from 'react';

// ধরুন আপনার ডাটা API থেকে আসবে বা লোকাল ডাটা থেকে নেবেন


const LawyerPage = ({ params }) => {
  const { id } = params;  // dynamic param থেকে আইডি পাবেন
  console.log("Received ID:", id);
  // ডাটা থেকে আইডি দিয়ে আইটেম খুঁজে বের করুন
  const lawyer = lawyer.find((lawyer) => lawyer.id === id);
  console.log("Found Lawyer:", lawyer);

  if (!lawyer) {
    return <div>Lawyer not found</div>;
  }

  return (
    <div>
      <h1>{lawyer.name}</h1>
      <p>Education: {lawyer.education}</p>
      <p>Details: {lawyer.details}</p>
    </div>
  );
};

export default LawyerPage;
