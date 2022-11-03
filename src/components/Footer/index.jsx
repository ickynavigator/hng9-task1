import i4g from '../../assets/i4g.svg';
import zuri from '../../assets/zuri.svg';

const Footer = () => {
  return (
    <>
      <hr />

      <div className="footer">
        <img src={zuri} />
        <span>HNG Internship 9 Frontend Task</span>
        <img src={i4g} />
      </div>
    </>
  );
};

export default Footer;
