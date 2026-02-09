import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-3" style={{ maxWidth: "400px" }}>
      <h1>Sign up</h1>
      <input 
        className="form-control mb-2 wd-username"
        placeholder="username"
      />
      <input 
        className="form-control mb-2 wd-password"
        placeholder="password" 
        type="password"
      />
      <input 
        className="form-control mb-2 wd-password-verify"
        placeholder="verify password"
        type="password"
      />
      <Link 
        href="/account/profile" 
        className="btn btn-primary w-100 mb-2">
        Sign up
      </Link>
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}