import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <h1 className="text-white">Home</h1>
        </Link>
        <div className="flex ml-5">
          <Link href="/TicketPage/new">
            <FontAwesomeIcon icon={faSquarePlus} className="icon" />
          </Link>
        </div>
      </div>
      <div>
        <Link
          href="https://github.com/whoslive "
          className="text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
