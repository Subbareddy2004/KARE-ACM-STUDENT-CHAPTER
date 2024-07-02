export default function Home(){
    return <>
    <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://media.collegedekho.com/media/img/institute/crawled_images/10954213_646815555444140_1109846545044414416_o.jpg')"}}>
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-filter backdrop-blur-sm"></div>
      
      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">
          KARE ACM INTERNATIONAL STUDENT CHAPTER
        </h1>
        <p className="text-lg md:text-3xl">
          We aim to motivate students to embark on a journey of learning and developing the tools of computer science and instilling in them a passion for computer science. We serve to clear the clutter and provide guidance to help them to achieve their goals
        </p>
      </div>
    </div>
    </>
}