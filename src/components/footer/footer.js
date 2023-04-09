import {
  TwitterIcon,
  InstagramIncon,
  LinkinIcon,
  GithubIcon,
  CopyrightIcon,
} from '../svg';
import './styles.scss';

const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <span className='connect_container'>
        <span className='small_p'>Connect with me:</span>
        <a href='#'>{TwitterIcon}</a>
        <a href='#'>{LinkinIcon}</a>
        <a href='#'>{InstagramIncon}</a>
        <a href='#'>{GithubIcon}</a>
      </span>
      <section>
        <span className='x-small_p'>
          {CopyrightIcon}Copyright. All right reserved
        </span>
      </section>
    </div>
  );
};

export default Footer;
