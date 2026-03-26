"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setCurrentUser } from "../reducer";
import * as db from "../../database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) {
      setError("Invalid username or password.");
      return;
    }
    setError("");
    dispatch(setCurrentUser(user));
    router.push("/account/profile");
  };

  return (
    <div id="wd-signin-screen" className="p-3" style={{ maxWidth: "400px" }}>
      <h1>Sign in</h1>
      {error && <div className="alert alert-danger py-2">{error}</div>}
      <input
        className="form-control mb-2"
        id="wd-username"
        placeholder="username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        className="form-control mb-2"
        id="wd-password"
        placeholder="password"
        type="password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button
        id="wd-signin-btn"
        onClick={signin}
        className="btn btn-primary w-100 mb-2">
        Sign in
      </button>
      <Link id="wd-signup-link" href="/account/signup">Sign up</Link>
      <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
        Test credentials: <strong>tony</strong> / <strong>123</strong> &nbsp;|&nbsp;
        <strong>clark</strong> / <strong>123</strong>
      </p>
    </div>
  );
}