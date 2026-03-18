"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/dashboard");
    } catch (err: any) {
      setError("Invalid username or password.");
    }
  };

  return (
    <div id="wd-signin-screen" className="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <FormControl className="mb-2" placeholder="username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
      <FormControl className="mb-2" placeholder="password" type="password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
      <button onClick={signin} className="btn btn-primary mb-2 w-100">
        Sign in
      </button>
      <Link href="/account/signup" className="wd-signup-link">Sign up</Link>
    </div>
  );
}