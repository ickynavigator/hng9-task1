import LinkButton from '@Comp/LinkButton';
import ProfilePhoto from '@Comp/ProfilePhoto';
import ShareButton from '@Comp/ShareButton';
import { constantLinks, name, slackName, twitter } from './info';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="profile">
        <div className="profile__wrapper">
          <div />
          <ProfilePhoto />
          <ShareButton image="share" />
        </div>
        <h2>{name}</h2>
      </div>

      <LinkButton id={'twitter'} title={'Twitter Link'} url={twitter} />
      <LinkButton id={'slack'} title={slackName} />

      {constantLinks.map(({ link, title, id }) => (
        <LinkButton key={id} id={id} title={title} url={link} />
      ))}
    </div>
  );
};

export default App;
