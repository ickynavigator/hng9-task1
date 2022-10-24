import LinkButton from '@Comp/LinkButton';
import ProfilePhoto from '@Comp/ProfilePhoto';
import { constantLinks, name, slackName, twitter } from './info';

const App: React.FC = () => {
  return (
    <div className="App">
      <ProfilePhoto />

      <h2>{name}</h2>

      <LinkButton id={'twitter'} title={'Twitter Link'} url={twitter} />
      <LinkButton id={'slack'} title={slackName} />

      {constantLinks.map(({ link, title, id }) => (
        <LinkButton key={id} id={id} title={title} url={link} />
      ))}
    </div>
  );
};

export default App;
