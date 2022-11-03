import github from '../../assets/github.svg';
import slack from '../../assets/slack.svg';
import Footer from '../../components/Footer';
import { LinkButton, RouteButton } from '../../components/LinkButton';
import ProfilePhoto from '../../components/ProfilePhoto';
import ShareButton from '../../components/ShareButton';
import { constantLinks, githubLink, name, slackName, twitter } from '../../info';

const Index = () => {
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
