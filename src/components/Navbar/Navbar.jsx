function Navbar() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-10 fixed w-full backdrop-blur-sm bg-black/75 text-xs text-slate-50 h-10">
        <nav className="fa-brands fa-apple text-lg"></nav>
        <nav>Store</nav>
        <nav>Mac</nav>
        <nav>iPad</nav>
        <nav>iPhone</nav>
        <nav>Watch</nav>
        <nav>AirPods</nav>
        <nav>TV & Home</nav>
        <nav>Entertainment</nav>
        <nav>Accessories</nav>
        <nav>Support</nav>
        <nav className="fas fa-magnifying-glass"></nav>
        <nav className="fas fa-bag-shopping"></nav>
      </div>
    </div>
  );
}
export default Navbar;
