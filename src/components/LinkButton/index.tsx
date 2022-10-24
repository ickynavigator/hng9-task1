import styles from './index.module.scss';

interface BProps {
  id?: string;
  title: string;
  url?: string;
}

const LinkButton: React.FC<BProps> = ({ id, title, url }) => {
  return (
    <a id={id} href={url} className={`${styles.button}`}>
      {title}
    </a>
  );
};

export default LinkButton;
