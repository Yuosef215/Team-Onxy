import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoChevronBackCircleOutline } from "react-icons/io5";



function DrAhmed() {
    return (
        <div className="min-h-screen bg-[#0c0c0f] text-white p-6">
            <a href="/team" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 mb-6">
                <IoChevronBackCircleOutline size={24} />
                Back to Page
            </a>
        <div className="p-6 bg-[#111116] rounded-xl border border-white/[0.07] w-full  mt-10">
            <h1 className="font-bold text-2xl text-center mb-2 text-white">About Dr. Ahmed Hamdy Sweidan</h1>
            <div className="grid justify-center">
            <img className=" rounded-xl max-w-[200px] align-center mb-4" src="/swidan.jpeg" alt="Dr. Ahmed Hamdy Sweidan" />
            <br />
            <p className="text-sm text-gray-400 mb-4">Head of Mechatronics Department</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
                Dr. Ahmed Hamdy Sweidan, Head of the Mechatronics Department at Helwan International Technological University.
                A researcher specializing in renewable energy and its applications in water desalination.
                Focuses on developing innovative and sustainable solutions to address water scarcity challenges.
                Experienced in the design and performance optimization of solar still systems.
                Has participated in experimental studies under real climatic conditions in Egypt.
                Contributed to improving solar system efficiency using advanced cooling techniques.
                Interested in developing low-cost and practical technologies for developing communities.
                Works on integrating technical efficiency with economic feasibility in engineering projects.
                Seeks to promote research and innovation in the fields of energy and water.
                Aspires to support sustainable development through advanced engineering solutions.
            </p>
            <div className="mt-6 flex items-center gap-4">
                <a href="" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700">
                <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/DrAhmedSweidan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-4">
                <FaFacebookF size={30} />
            </a>
            <a href="https://www.facebook.com/share/1GqwcTF3gM/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 ml-4">
                <FaLinkedin size={30} />
            </a>
            <a href="https://wa.me/+201000000000" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 ml-4">
                <FaWhatsapp size={30} />
            </a>
            </div>
        </div>
        </div>
    );
}


export default DrAhmed;