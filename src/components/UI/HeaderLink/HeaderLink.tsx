import { Link } from "react-router-dom";

interface HeaderLinkProps {
  name: string;
  path: string;
}

const HeaderLink = ({ name, path }: HeaderLinkProps) => {
  return (
    <>
      <Link to={path}>{name}</Link>
    </>
  );
};

export default HeaderLink;
