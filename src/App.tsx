import * as React from "react";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="404" element={<NoMatch />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl">
          <nav className="flex h-16 items-center justify-between">
            <ul className="flex gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
