import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import Link from "next/link";

export default function KambazNavigation() {
  return (
    <ul 
      id="wd-kambaz-navigation" 
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      
      <li className="list-group-item bg-black border-0 text-center">
        <a 
          target="_blank" 
          href="https://www.northeastern.edu/" 
          id="wd-neu-link"
          rel="noopener noreferrer">
          <img src="/images/neu.svg" width="75px" alt="Northeastern University" />
        </a>
      </li>
      <br />
      
      <li className="list-group-item border-0 bg-black text-center">
        <Link href="/account" id="wd-account-link" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </li>
      <br />
      
      <li className="list-group-item border-0 bg-white text-center">
        <Link href="/dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </li>
      <br />
      
      <li className="list-group-item border-0 bg-black text-center">
        <Link href="/courses" id="wd-courses-link" className="text-danger text-decoration-none">
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </li>
      <br />
      
      <li className="list-group-item border-0 bg-black text-center">
        <Link href="/calendar" id="wd-calendar-link" className="text-danger text-decoration-none">
          <IoCalendarOutline className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </li>
      <br />
      
      <li className="list-group-item border-0 bg-black text-center">
        <Link href="/inbox" id="wd-inbox-link" className="text-danger text-decoration-none">
          <FaInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </li>
      <br />
      
      <li className="list-group-item border-0 bg-black text-center">
        <Link href="/labs" id="wd-labs-link" className="text-danger text-decoration-none">
          <LiaCogSolid className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </li>
    </ul>
  );
}