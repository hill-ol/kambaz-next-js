"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/account/profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed.");
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <FormControl className="wd-username mb-2" placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <FormControl className="wd-password mb-2" placeholder="password" type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })} />
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100">
        Sign up
      </button>
      <Link href="/account/signin" className="wd-signin-link">Sign in</Link>
    </div>
  );
}