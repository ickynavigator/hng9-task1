import LinkButton from '@Comp/LinkButton';
import { constantLinks, twitter } from './info';

const App: React.FC = () => {
  return (
    <div className="App">
      <LinkButton title={'Twitter Link'} url={twitter} />
      {constantLinks.map(({ link, title, id }) => (
        <LinkButton key={id} id={id} title={title} url={link} />
      ))}
    </div>
  );
};

export default App;
