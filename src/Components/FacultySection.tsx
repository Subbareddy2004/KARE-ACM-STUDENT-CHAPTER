import React from 'react';

interface FacultyCardProps {
  name: string;
  title: string;
  imageSrc: string;
  linkedinUrl?: string; // Make it optional
}

const FacultyCard: React.FC<FacultyCardProps> = ({ name, title, imageSrc, linkedinUrl }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-300">
    <img src={imageSrc} alt={name} className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-gray-200" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-base text-gray-600 mb-3">{title}</p>
    {linkedinUrl && (
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block" aria-label={`${name}'s LinkedIn Profile`}>
        <svg className="w-8 h-8 text-blue-500 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    )}
  </div>
);

const FacultySection: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-transparent mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-center ">FACULTY SPONSER</h1>
    <div className="max-w-md mx-auto mb-16">
      <FacultyCard 
        name="Dr P Nagaraj"
        title="Faculty Sponser"
        imageSrc="https://i.postimg.cc/vT6XZ7DW/Nagaraj-P-sir.jpg"
        linkedinUrl="https://www.linkedin.com/in/dr-p-nagaraj-profile"
      />
    </div>
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-orange-500 text-center mb-12">FACULTY COORDINATORS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <FacultyCard 
        name="Dr.T.Marimuthu"
        title="Faculty Coordinator"
        imageSrc="https://i.postimg.cc/d1Qthcyj/Marimuthu-sir.jpg"
        linkedinUrl="https://www.linkedin.com/in/dr-t-marimuthu-profile"
      />
      <FacultyCard 
        name="Manikandan V"
        title="Faculty Coordinator"
        imageSrc="https://i.postimg.cc/Zqt8X5XK/fcs.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
       <FacultyCard 
        name="Mrs S.Amutha"
        title="Faculty Coordinator"
        imageSrc="https://i.postimg.cc/j5x4MnFs/Amutha-mam2.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
       <FacultyCard 
        name="Mrs P Anitha"
        title="Faculty Coordinator"
        imageSrc="https://i.postimg.cc/3wsFb4tN/Anitha-p.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
      {/* Add linkedinUrl for other FacultyCard components */}
    </div>
  </div>
);

export default FacultySection;