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
        <a href='https://twitter.com/iamaddresser_' target='_blank'>
          {TwitterIcon}
        </a>
        <a href='#'>{LinkinIcon}</a>
        <a
          href='https://instagram.com/iamaddresser?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=='
          target='_blank'
        >
          {InstagramIncon}
        </a>
        <a
          href='https://github.com/Addresser001?tab=repositories'
          target='_blank'
        >
          {GithubIcon}
        </a>
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
