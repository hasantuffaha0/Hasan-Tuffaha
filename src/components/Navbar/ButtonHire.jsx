const ButtonNav = ({ write, Href='', className }) => {
  return (
    <a href={Href} className={className}>
      {write}
    </a>
  );
};

export default ButtonNav;
