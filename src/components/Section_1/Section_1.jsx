function Section_1() {
  return (
    <div className="h-1/3">
      <div className="flex justify-center h-screen ">
        <div
          className="img 	 grid text-slate-50 w-full h-full bg-no-repeat"
          style={{
            background:
              "url(https://www.apple.com/v/home/bm/images/heroes/apple-vision-pro-enhanced/hero_apple_vision_pro_enhanced_endframe__b917czne63hy_xlarge.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="justify-self-center self-end mb-44 text-center">
            <h1
              style={{
                fontSize: "56px",
                lineHeight: "1.07143",
                fontWeight: "600",
                letterSpacing: "-.005em",
                fontFamily:
                  "'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              }}
              className="font-black text-6xl font-sans"
            >
              <i className="fab fa-apple"></i> Vision Pro
            </h1>
            <p>{"You've never seen everything like this before"}</p>
            <div className="flex justify-center gap-2 mt-6">
              <button className="bg-white/90 text-black rounded-3xl h-12 hover:bg-white/100 w-28">
                Learn More
              </button>
              <button className="bg-transparent  text-white border border-white rounded-3xl hover:bg-white hover:text-black h-12 w-20">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_1;
