interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return <h1 className="text-3xl font-semibold">{text}</h1>;
};
