import React from 'react';

// --- Icon Components (Heroicons) ---
// Using inline SVGs for a single-file, dependency-free component.

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036V21" />
  </svg>
);

const LockClosedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

// --- Custom Certification Badge Component ---
// Recreates the circular badge style from the image
const CertificationBadge = ({ standard, type }) => (
  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-50 border border-blue-200 p-2 shadow-sm">
    <div className="flex flex-col items-center justify-center text-center">
      <span className="font-bold text-xs text-blue-700">{standard}</span>
      <div className="my-1 h-px w-8 bg-blue-300"></div>
      <span className="font-medium text-[10px] text-blue-600">{type}</span>
    </div>
  </div>
);

// --- Reusable Feature Item Component ---
const FeatureItem = ({ icon, title, description, isCentral = false }) => (
  <div className="flex flex-col items-center text-center p-6 md:p-0">
    <div className={`flex h-32 w-32 items-center justify-center rounded-2xl ${
      isCentral ? 'bg-white shadow-xl border border-gray-100' : 'bg-transparent'
    }`}>
      {icon}
    </div>
    <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600 max-w-[250px]">{description}</p>
  </div>
);


// --- Main Section Component ---
const ProtectionSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-24 px-6">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Enterprise-Grade Protection
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          End-to-end encryption keeps your personal messages and calls between
          you and the people you choose. Not even Ringg can read or listen to them.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-20 flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
        <FeatureItem
          icon={<CertificationBadge standard="AV/DA" type="SOC 2" />}
          title="SOC 2 Certified"
          description="Independent audits for data security and privacy."
        />
        
        <FeatureItem
          icon={<LockClosedIcon />}
          title="End-to-End Encryption"
          description="Robust information security management practices."
          isCentral={true}
        />
        
        <FeatureItem
          icon={<CertificationBadge standard="ISO" type="27001" />}
          title="ISO 27001 Compliant"
          description="Robust information security management practices."
        />
      </div>
    </div>
  );
};
export default ProtectionSection