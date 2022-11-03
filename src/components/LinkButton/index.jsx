import { Link } from 'react-router-dom';
import styles from './index.module.scss';

/**
 * @param {{
 *          id?: string,
 *          title: JSX.Element | string,
 *          url?: string
 *        }} props
 */
export const LinkButton = ({ id, title, url }) => {
  return (
    <a id={id} href={url} className={`${styles.button}`}>
      {title}
    </a>
  );
};

/**
 * @param {{
 *          id?: string,
 *          title: JSX.Element | string,
 *          url: string
 *        }} props
 * @returns {JSX.Element}
 */
export const RouteButton = ({ id, title, url }) => {
  return (
    <Link id={id} to={url} className={`${styles.button}`}>
      {title}
    </Link>
  );
};

export default LinkButton;
