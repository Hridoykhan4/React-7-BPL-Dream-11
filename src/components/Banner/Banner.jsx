const Banner = () => {
    return (
        <div className="w-11/12 max-w-[1440px] mx-auto my-3 bg-[url(/src/assets/bg-shadow.png)] bg-black min-h-[500px] bg-no-repeat rounded-lg">
            <div className="flex flex-col items-center gap-4 py-20">
                <img src="/src/assets/banner-main.png" alt="" />
                <h3 className="text-lg sm:text-2xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className="text-white/70 font-medium">Beyond Boundaries Beyond Limits</p>
                <button className="btn bg-[#E7FE29] outline outline-offset-2 outline-black ring-2 ring-black font-bold ">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;