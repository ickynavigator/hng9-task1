import { Link } from 'react-router-dom';
import styles from './index.module.scss';

interface BProps {
  id?: string;
  title: JSX.Element | string;
  url?: string;
}

export const LinkButton: React.FC<BProps> = ({ id, title, url }) => {
  return (
    <a id={id} href={url} className={`${styles.button}`}>
      {title}
    </a>
  );
};

interface RProps extends BProps {
  url: string;
}

export const RouteButton: React.FC<RProps> = ({ id, title, url }) => {
  return (
    <Link id={id} to={url} className={`${styles.button}`}>
      {title}
    </Link>
  );
};

export default LinkButton;
