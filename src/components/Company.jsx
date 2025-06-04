import Marquee from "react-fast-marquee";

const Company = () => {
    return (
        <div className="my-4">
            <h2 className="text-xl font-semibold text-center my-4">Soon, You’ll Switch Everything to Treedi</h2>
            <Marquee loop={0} gradient gradientColor="rgb(0,0,0)" gradientWidth={100} autoFill>
                <img src="/logo/at.png" className="ml-10" alt="" />
                <img src="/logo/bmw.png" className="ml-10" alt="" />
                <img src="/logo/cisco.png" className="ml-10" alt="" />
                <img src="/logo/cnn.png" className="ml-10" alt="" />
                <img src="/logo/cvs.png" className="ml-10" alt="" />
                <img src="/logo/ferrari.png" className="ml-10" alt="" />
                <img src="/logo/google.png" className="ml-10" alt="" />
                <img src="/logo/ibm.png" className="ml-10" alt="" />
                <img src="/logo/instagram.png" className="ml-10" alt="" />
                <img src="/logo/microsoft.png" className="ml-10" alt="" />
                <img src="/logo/uber.png" className="ml-10" alt="" />
            </Marquee>
            <div className="border border-[#404040] w-11/12 mx-auto my-20"></div>
        </div>
    );
};

export default Company;