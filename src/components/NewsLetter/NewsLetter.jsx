const NewsLetter = () => {
  return (
   <div className="p-4 border rounded-lg border-white backdrop-blur-3xl translate-y-24">
     <div className="bg-[url(/src/assets/bg-shadow.png)] rounded-lg min-h-[400px] bg-gradient from-pink-500 to-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="text-3xl font-bold">Subscribe to Our Newsletter</h3>
        <p className="text-black font-medium">
          Get the latest news and updates right in your inbox
        </p>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn bg-red-600 text-white font-semibold join-item">Subscribe</button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default NewsLetter;
