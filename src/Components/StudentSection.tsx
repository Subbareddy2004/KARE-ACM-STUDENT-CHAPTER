import React from 'react';

interface StudentCardProps {
  name: string;
  title: string;
  imageSrc: string;
  linkedinUrl?: string; // Make it optional
}

const StudentCard: React.FC<StudentCardProps> = ({ name, title, imageSrc, linkedinUrl }) => (
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

const StudentSection: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 text-center mb-7">OFFICIALS</h1>
    <div className="flex justify-center mb-7 ">
  <div className="grid grid-cols-2">  <li className="text-white bg-red-700 list-none hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ml-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">KARE ACM</li>
    <li className="text-white bg-red-700 list-none hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-7 py-2.5 text-center me-2 mb-2 ml-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">KARE ACM-W</li>
  </div>
</div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <StudentCard 
        name="Rohith"
        title="Chair"
        imageSrc="https://i.postimg.cc/3R1nYmXx/Rohith-chair.jpg"
        linkedinUrl="https://www.linkedin.com/in/dr-p-nagaraj-profile"
      />
      <StudentCard 
        name="G Charan Kumar Naidu"
        title="Vice-Chair"
        imageSrc="https://i.postimg.cc/BnJb1FH0/G-Charan-Kumar-Naidu-chair.jpg"
        linkedinUrl="https://www.linkedin.com/in/dr-p-nagaraj-profile"
      />
      <StudentCard 
        name="V Bhanu Prathap Sourya"
        title="Treasurer"
        imageSrc="https://i.postimg.cc/CMPp4f30/Bhanu-Prathap-Sourya-Treasurer.jpg"
        linkedinUrl="https://www.linkedin.com/in/dr-p-nagaraj-profile"
      />
      <StudentCard 
        name="M Chaitanya Prabhu"
        title="Secretary"
        imageSrc="https://i.postimg.cc/wMnZJD7Q/Chaithanya-prabu-Secatarory.jpg"
        linkedinUrl="https://www.linkedin.com/in/dr-p-nagaraj-profile"
      />
    </div>
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-400 to-orange-500 text-center mt-9 mb-12">ACM CORE TEAM</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <StudentCard 
        name="Y Jagan Mohan Reddy"
        title="Membership Chair"
        imageSrc="https://i.postimg.cc/QMB6gFZ6/Jagan-Mohan-Reddy-Membership-Chair.jpg"
        linkedinUrl="https://www.linkedin.com/in/dr-t-marimuthu-profile"
      />
      <StudentCard 
        name="Nipun Negi"
        title="Activity Lead"
        imageSrc="https://i.postimg.cc/g2scZw2f/Nipun-negi-activity-lead.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
       <StudentCard 
        name="Praveen Kumar A"
        title="Activity Lead"
        imageSrc="https://i.postimg.cc/cLLyPFdb/PRAVEEN-KUMAR-A-ACTIVITY-TEAM.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
       <StudentCard 
        name="P.N.SATYA VENKATESH"
        title="Activity Lead"
        imageSrc="https://i.postimg.cc/LXrHsF45/P-N-Satya-Venkatesh-Activity-Lead.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
       <StudentCard 
        name="P.N.SATYA VENKATESH"
        title="Activity Lead"
        imageSrc="https://i.postimg.cc/LXrHsF45/P-N-Satya-Venkatesh-Activity-Lead.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
       <StudentCard 
        name="P.N.SATYA VENKATESH"
        title="Activity Lead"
        imageSrc="https://i.postimg.cc/LXrHsF45/P-N-Satya-Venkatesh-Activity-Lead.jpg"
        linkedinUrl="https://www.linkedin.com/in/manikandan-v-profile"
      />
      {/* Add linkedinUrl for other StudentCard components */}
    </div>
  </div>
);

export default StudentSection;