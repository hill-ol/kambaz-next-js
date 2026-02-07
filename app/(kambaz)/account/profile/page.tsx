import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3" style={{ maxWidth: "500px" }}>
      <h1>Profile</h1>
      
      <div className="mb-3">
        <label htmlFor="wd-username" className="form-label">Username</label>
        <input 
          className="form-control" 
          defaultValue="alice" 
          placeholder="username" 
          id="wd-username"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="wd-password" className="form-label">Password</label>
        <input 
          className="form-control" 
          defaultValue="123" 
          placeholder="password" 
          type="password"
          id="wd-password" 
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="wd-firstname" className="form-label">First Name</label>
        <input 
          className="form-control" 
          defaultValue="Alice" 
          placeholder="First Name" 
          id="wd-firstname" 
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="wd-lastname" className="form-label">Last Name</label>
        <input 
          className="form-control" 
          defaultValue="Wonderland" 
          placeholder="Last Name" 
          id="wd-lastname" 
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="wd-dob" className="form-label">Date of Birth</label>
        <input 
          className="form-control" 
          defaultValue="2000-01-01" 
          type="date" 
          id="wd-dob" 
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="wd-email" className="form-label">Email</label>
        <input 
          className="form-control" 
          defaultValue="alice@wonderland" 
          type="email" 
          id="wd-email" 
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="wd-role" className="form-label">Role</label>
        <select className="form-select" defaultValue="USER" id="wd-role">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      
      <Link href="/account/signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}