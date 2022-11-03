import i4g from '@Assets/i4g.svg';
import zuri from '@Assets/zuri.svg';

const Footer: React.FC = () => {
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
