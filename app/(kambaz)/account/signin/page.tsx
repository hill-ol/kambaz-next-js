import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="p-3" style={{ maxWidth: "400px" }}>
      <h1>Sign in</h1>
      <input 
        className="form-control mb-2" 
        id="wd-username"
        placeholder="username"
      />
      <input 
        className="form-control mb-2" 
        id="wd-password"
        placeholder="password" 
        type="password"
      />
      <Link 
        id="wd-signin-btn"
        href="/courses/1234/home"
        className="btn btn-primary w-100 mb-2">
        Sign in
      </Link>
      <Link id="wd-signup-link" href="/account/signup">Sign up</Link>
    </div>
  );
}