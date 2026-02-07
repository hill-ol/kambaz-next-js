import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link 
        href="/account/signin" 
        className="list-group-item border-0 text-danger">
        Signin
      </Link>
      <Link 
        href="/account/signup" 
        className="list-group-item border-0 text-danger">
        Signup
      </Link>
      <Link 
        href="/account/profile" 
        className="list-group-item active border-0">
        Profile
      </Link>
    </div>
  );
}