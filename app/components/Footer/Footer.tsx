import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { CiDumbbell } from "react-icons/ci";
import { SlGraph } from "react-icons/sl";

import { IconBaseProps, IconType } from "react-icons/lib";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full my-4 bg-[#f6f6f6] rounded-t-full rounded-b-full">
      <nav>
        <ul className="flex justify-between items-stretch py-2 px-4">
          <Widget href="/history" icon={CgProfile} label="history" />
          <Widget href="/profile" icon={GoHistory} label="profile" />
          <Widget href="/" icon={IoIosAdd} label="workout" />
          <Widget href="/exercises" icon={CiDumbbell} label="exercises" />
          <Widget href="/analysis" icon={SlGraph} label="analysis" />
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

interface WidgetProps extends IconBaseProps {
  icon: IconType;
  label: string;
  href: string;
}

const Widget = ({ icon: Icon, label, href }: WidgetProps) => {
  return (
    <li className="flex flex-col items-center justify-center w-[50%]">
      <Link href={href} className="flex flex-col items-center justify-center gap-1">
        <span>
          <Icon />
        </span>
        <span className="text-xs capitalize">{label}</span>
      </Link>
    </li>
  );
};
