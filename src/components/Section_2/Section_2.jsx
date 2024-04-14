function Section_2() {
  return (
    <div>
      <div className="w-full h-lvh bg-black mt-3">
        <div
          className="pro bg-black h-4/5 bg-center text-white flex flex-col items-center"
          style={{
            background:
              "url(https://www.apple.com/v/home/bm/images/heroes/iphone-15-pro/hero_iphone15pro__i70z9oz3hj2i_large.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <center className="mt-10">
            <span className="">
              <h2     style={{
                  fontSize: "56px",
                  lineHeight: "1.07143",
                  fontWeight: "600",
                  letterSpacing: "-.005em",
                  fontFamily:
                    "'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                }} className="text-6xl 	font-sans font-semibold	">
                iPhone 15 Pro
              </h2>
              <p className="text-2xl font-normal mt-2 tracking-wider	">
                Titanium. So strong. So light. So Pro.
              </p>
              <span className="">
                <button className="bg-blue-500  text-white rounded-3xl h-10 hover:brightness-110	 w-28">
                  Learn More
                </button>
                <button className="bg-transparent  mt-4 ml-4 text-blue-500 border border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white h-10 w-20">
                  Buy
                </button>
              </span>
            </span>
          </center>
        </div>
        <div
          className="iphone bg-white h-5/6"
          style={{
            background:
              "url(https://www.apple.com/v/home/bm/images/heroes/iphone-15/hero_iphone15_announce__uuemlcwczn6u_large.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <center className="pt-12">
            <span className="">
              <h2
                style={{
                  fontSize: "56px",
                  lineHeight: "1.07143",
                  fontWeight: "600",
                  letterSpacing: "-.005em",
                  fontFamily:
                    "'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                }}
                className="text-6xl font-sans font-semibold"
              >
                iPhone 15 Pro
              </h2>

              <p className="text-2xl font-normal mt-2 tracking-wider	">
                New camera. New design. Newphoria.{" "}
              </p>
              <span className="">
                <button className="bg-blue-500  text-white rounded-3xl h-10 hover:brightness-110	 w-28">
                  Learn More
                </button>
                <button className="bg-transparent  mt-4 ml-4 text-blue-500 border border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white h-10 w-20">
                  Buy
                </button>
              </span>
            </span>
          </center>
        </div>
      </div>
    </div>
  );
}
export default Section_2;
