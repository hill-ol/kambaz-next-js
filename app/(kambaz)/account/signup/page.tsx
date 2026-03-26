"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { setCurrentUser } from "../reducer";
import * as db from "../../database";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = () => {
    if (!credentials.username || !credentials.password) {
      setError("Username and password are required.");
      return;
    }
    if (credentials.password !== credentials.passwordVerify) {
      setError("Passwords do not match.");
      return;
    }
    const existing = db.users.find((u: any) => u.username === credentials.username);
    if (existing) {
      setError("Username already taken.");
      return;
    }
    const newUser = {
      _id: new Date().getTime().toString(),
      username: credentials.username,
      password: credentials.password,
      role: "STUDENT",
    };
    (db.users as any[]).push(newUser);
    dispatch(setCurrentUser(newUser));
    router.push("/account/profile");
  };

  return (
    <div id="wd-signup-screen" className="p-3" style={{ maxWidth: "400px" }}>
      <h1>Sign up</h1>
      {error && <div className="alert alert-danger py-2">{error}</div>}
      <input
        className="form-control mb-2 wd-username"
        placeholder="username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        className="form-control mb-2 wd-password"
        placeholder="password"
        type="password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <input
        className="form-control mb-2 wd-password-verify"
        placeholder="verify password"
        type="password"
        onChange={(e) => setCredentials({ ...credentials, passwordVerify: e.target.value })}
      />
      <button
        id="wd-signup-btn"
        onClick={signup}
        className="btn btn-primary w-100 mb-2">
        Sign up
      </button>
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}