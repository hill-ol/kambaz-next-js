import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="p-3" style={{ maxWidth: "400px" }}>
      <h1>Sign up</h1>
      <input 
        className="form-control mb-2" 
        placeholder="username" 
        className="wd-username" 
      />
      <input 
        className="form-control mb-2" 
        placeholder="password" 
        type="password" 
        className="wd-password" 
      />
      <input 
        className="form-control mb-2" 
        placeholder="verify password"
        type="password" 
        className="wd-password-verify" 
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