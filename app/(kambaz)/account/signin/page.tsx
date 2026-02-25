"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setCurrentUser } from "../reducer";
import * as db from "../../database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-3" style={{ maxWidth: "400px" }}>
      <h1>Sign in</h1>
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
    </div>
  );
}