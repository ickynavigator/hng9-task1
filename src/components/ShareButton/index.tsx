import { useEffect, useState } from 'react';

import { RiMoreFill, RiShareForwardLine } from 'react-icons/ri';
import useWindowSize from 'src/hooks/useWindowSize';
import styles from './index.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** This is the svg style */
  image: 'share' | 'more';
  // TODO: add tooltip
  /** The tooltip text */
  hoverText?: string;
  /** Set this to false if you do not want the button to change based on size */
  checkSize?: boolean;
}

const ShareButton: React.FC<Props> = ({ image, checkSize = true, ...props }) => {
  const [currentImgType, setCurrentImgType] = useState(image);
  const size = useWindowSize();

  useEffect(() => {
    if (checkSize) {
      if (size?.width != null && size.width <= 768) {
        setCurrentImgType('more');
      } else {
        setCurrentImgType('share');
      }
    }
  }, [size.width, checkSize]);

  return (
    <button {...props} className={styles.button}>
      {currentImgType === 'share' && <RiShareForwardLine size={25} className={styles.icon} />}
      {currentImgType === 'more' && <RiMoreFill size={25} className={styles.icon} />}
    </button>
  );
};

export default ShareButton;
