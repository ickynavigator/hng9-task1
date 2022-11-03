import github from '@Assets/github.svg';
import i4g from '@Assets/i4g.svg';
import slack from '@Assets/slack.svg';
import zuri from '@Assets/zuri.svg';
import LinkButton from '@Comp/LinkButton';
import ProfilePhoto from '@Comp/ProfilePhoto';
import ShareButton from '@Comp/ShareButton';
import { constantLinks, githubLink, name, slackName, twitter } from '../../info';

const Index: React.FC = () => {
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

      <div className="social__icons">
        <img src={slack} />
        <a href={githubLink}>
          <img src={github} />
        </a>
      </div>

      <hr />

      <div className="footer">
        <img src={zuri} />
        <span>HNG Internship 9 Frontend Task</span>
        <img src={i4g} />
      </div>
    </div>
  );
};

export default Index;
