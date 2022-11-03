import github from '@Assets/github.svg';
import slack from '@Assets/slack.svg';
import Footer from '@Comp/Footer';
import { LinkButton, RouteButton } from '@Comp/LinkButton';
import ProfilePhoto from '@Comp/ProfilePhoto';
import ShareButton from '@Comp/ShareButton';
import { githubLink } from 'src/info';
import { constantLinks, name, slackName, twitter } from '../../info';

const Index: React.FC = () => {
  return (
    <>
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

      <RouteButton id="contact" title="Contact Me" url="contact" />

      <div className="social__icons">
        <img src={slack} />
        <a href={githubLink}>
          <img src={github} />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Index;
