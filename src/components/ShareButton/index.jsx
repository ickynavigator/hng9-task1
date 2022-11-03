import { useEffect, useState } from 'react';
import { RiMoreFill, RiShareForwardLine } from 'react-icons/ri';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './index.module.scss';

/**
 * @param {{
 *          image: 'share' | 'more',
 *          hoverText?: string,
 *          checkSize?: boolean
 *        }} props
 */
const ShareButton = ({ image, checkSize = true, ...props }) => {
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
