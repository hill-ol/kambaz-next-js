"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  };

  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/account/signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div id="wd-profile-screen" className="p-3" style={{ maxWidth: "500px" }}>
      <h1>Profile</h1>
      {profile && (
        <div>
          <div className="mb-3">
            <label htmlFor="wd-username" className="form-label">Username</label>
            <input className="form-control" id="wd-username"
              defaultValue={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-password" className="form-label">Password</label>
            <input className="form-control" id="wd-password" type="password"
              defaultValue={profile.password}
              onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-firstname" className="form-label">First Name</label>
            <input className="form-control" id="wd-firstname"
              defaultValue={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-lastname" className="form-label">Last Name</label>
            <input className="form-control" id="wd-lastname"
              defaultValue={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-dob" className="form-label">Date of Birth</label>
            <input className="form-control" id="wd-dob" type="date"
              defaultValue={profile.dob}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-email" className="form-label">Email</label>
            <input className="form-control" id="wd-email" type="email"
              defaultValue={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          </div>
          <div className="mb-3">
            <label htmlFor="wd-role" className="form-label">Role</label>
            <select className="form-select" id="wd-role"
              defaultValue={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>
          <button onClick={updateProfile}
            className="btn btn-primary w-100 mb-2" id="wd-update-btn">
            Update
          </button>
          <button onClick={signout}
            className="btn btn-danger w-100" id="wd-signout-btn">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}