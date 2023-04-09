import './styles.scss';
const Header = ({
  className,
  text,
  className_lines,
  ref,
  header_sub_className,
}) => {
  return (
    <section className={`header_container ${header_sub_className}`} ref={ref}>
      <div className={`lines ${className_lines}`} />
      <h2 className={`header ${className}`}>{text}</h2>
      <div className={`lines ${className_lines}`} />
    </section>
  );
};

export default Header;
