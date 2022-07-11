import { Link, Outlet } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <Link to="/">App</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export function Home() {
  return (
    <div>
      <MainNav />
      <h1>My Website</h1>
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>About history</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <MainNav />
      <h1>About Us</h1>
      <Link to="history">History</Link>
      <Outlet />
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <MainNav />
      <h1>Contact me</h1>
    </div>
  );
}

export function App() {
  return (
    <div>
      <MainNav />
      <h1>App</h1>
    </div>
  );
}
