import './styles.scss';
import Navigation from './components/nav/navBar';
import {
  Polygon1,
  Polygon2,
  Polygon3,
  Polygon4,
  Polygon5,
  Polygon6,
  Polygon7,
} from './components/svg';

import profile_pic from './assets/images/my_pic.jpg';
import { motion, useScroll } from 'framer-motion';
import { Element, Link } from 'react-scroll';
import resume from '../src/assets/files/resume.pdf';
import Button from './components/button/customBtn';
import Header from './components/header/header';
import { Data } from './assets/data/works';
import Footer from './components/footer/footer';
import { AboutMeText } from './assets/data/aboutMeText';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Modal } from 'antd';
import {
  LoadingOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Formik } from 'formik';
import * as yup from 'yup';
const homeContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  },
};

const formSendModalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
const loadingModalVariants = {
  hidden: {
    y: '-200vh',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,

      delay: 0.8,
    },
  },
};

const validationSchema = yup.object().shape({
  from_name: yup.string().required('*You cannot leave the name field blank'),
  from_email: yup
    .string()
    .required('*Email must be a valid email address')
    .email('*Email must be a valid email address'),
  message: yup.string().required('*Message cannot be blank'),
});
function App() {
  const aboutMeSticky = useRef(null);
  const worksSticky = useRef(null);
  const contactSticky = useRef(null);
  const [aboutMeHeader, setAboutMeHeader] = useState(false);
  const [worksHeader, setWorksHeader] = useState(false);
  const [contactHeader, setContactHeader] = useState(false);
  const [extendWorksContainer, setExtendWorksContainer] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (aboutMeSticky.current?.getBoundingClientRect().top <= 10) {
        setAboutMeHeader(true);
      } else {
        setAboutMeHeader(false);
      }

      if (worksSticky.current?.getBoundingClientRect().top <= 20) {
        setWorksHeader(true);
      } else {
        setWorksHeader(false);
      }

      if (contactSticky.current?.getBoundingClientRect().top <= 20) {
        setContactHeader(true);
      } else {
        setContactHeader(false);
      }
    });
  });
  const [formSendModal, setFormSendModal] = useState(false);
  const [messageLoading, setMessageLoading] = useState(true);
  const [messageStatus, setMessageStatus] = useState(false);

  const fromRef = useRef(null);

  const showModal = () => {
    setFormSendModal(true);
  };
  const handleOk = () => {
    setFormSendModal(false);
  };
  const handleCancel = () => {
    setFormSendModal(false);
    window.location.reload();
  };

  const sendMail = () => {
    // console.log(fromRef.current);
    emailjs
      .sendForm(
        'service_4cbznfw',
        'template_ojy042p',
        fromRef.current,
        'DqfGHBtJjMhCQnH2v'
      )
      .then((data) => {
        if (data.status === 200) {
          setMessageLoading(false);
          setMessageStatus(true);
        } else {
          setMessageLoading(false);
          setMessageStatus(false);
        }
      });

    setFormSendModal(true);
  };

  return (
    <div className='app'>
      <Navigation />
      <div className='home_wrapper' id='home'>
        <Polygon1 className='polygon1' />
        <Polygon2 className='polygon2' />
        <Polygon3 className='polygon3' />

        <motion.div
          className='home_text'
          variants={homeContainerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h1>
            Hello, my name is{' '}
            <span>
              Sokari ThankGod{' '}
              <span className='addresser' style={{ fontSize: '20px' }}>
                (Addresser)
              </span>
            </span>
          </motion.h1>
          <p className='medium_p'>
            I’m a <span>frontend developer</span> based in Port Harcourt,
            Nigeria that is specialized in building accessible product with
            code.
          </p>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Button
              text='Hire me'
              className='hire_me_btn'
              initial='100vw'
              animate={0}
              type='spring'
              stiffness={200}
              delay={1.5}
              duration={1.5}
            />
          </Link>
        </motion.div>

        <Polygon4 className='polygon4' />
        <Polygon5 className='polygon5' />
        <Polygon6 className='polygon6' />
        <Polygon7 className='polygon7' />
      </div>

      <div className='about_me_wrapper' id='about'>
        <div className='sub_container'>
          <div className='text_container' ref={aboutMeSticky}>
            <Header
              text='About me'
              header_sub_className={aboutMeHeader ? 'header_sticky' : ' '}
              className='about_me_header'
            />
            <AboutMeText />
            <div className='btn_container'>
              <a href={resume} download='Sokari ThankGod resume'>
                <Button
                  text='Download resume'
                  className='download_resume_btn'
                  animate={0}
                  type='spring'
                  stiffness={150}
                />
              </a>
            </div>
          </div>
          <div className='image_container'>
            <img src={profile_pic} alt='Profile Image' />
          </div>
        </div>
      </div>

      <div className='my_works_wrapper'>
        <div
          className={
            extendWorksContainer
              ? 'sub_container extend_works_sub_container'
              : 'sub_container'
          }
          id='works'
          ref={worksSticky}
        >
          <Header
            text='My works'
            header_sub_className={worksHeader ? 'header_sticky' : ' '}
            className='my_works_header'
            className_lines=''
            lines
          />

          <div className='works'>
            {Data.map((datum) => {
              const { id, name, desc, img, icon, link } = datum;
              return (
                <div key={id} className='each_work display'>
                  <img src='/images/work_img.png' alt='Project image' />
                  <h2 className='image_caption medium_p'>{name}</h2>
                  <a href={link} target='_blank'>
                    <div className='work_text '>
                      <p className='medium_p'>{name}</p>
                      <p className='small_p'>{desc}</p>
                      <span className='github_icon'>
                        <a href='#'>{icon}</a>
                      </span>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className='btn_container'>
          <Button
            text={
              extendWorksContainer ? 'See less projects' : 'See all projects'
            }
            className='see_all_projects_btn'
            animate={0}
            type='spring'
            stiffness={150}
            onClick={() => setExtendWorksContainer(!extendWorksContainer)}
          />
        </div>
      </div>

      <div id='contact'>
        <div className='contact_me_wrapper'>
          <div className='sub_container' ref={contactSticky}>
            <Header
              text='Contact me'
              header_sub_className={contactHeader ? 'header_sticky' : ' '}
              className='contact_me_header'
              className_lines=''
              lines
            />
            <div className='sub_container'>
              <p className='large_p'>
                Got a project you want to bring to life? send an email and let’s
                bla bla bla
              </p>

              <Formik
                initialValues={{ from_name: '', from_email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={sendMail}
              >
                {({ handleSubmit, errors, handleChange }) => (
                  <form
                    className='form'
                    ref={fromRef}
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <div className='input_div'>
                      <label>Full name</label>

                      <input
                        type='text'
                        name='from_name'
                        placeholder='Enter your full name'
                        onChange={handleChange('from_name')}
                      />
                      <p className='error_message'>{errors.from_name}</p>
                    </div>

                    <div className='input_div'>
                      <label>Email</label>
                      <input
                        onChange={handleChange('from_email')}
                        type='email'
                        placeholder='enter your email'
                        name='from_email'
                      />
                      <p className='error_message'>{errors.from_email}</p>
                    </div>

                    <div className='input_div'>
                      <label>Message</label>
                      <textarea
                        placeholder='Enter your message'
                        name='message'
                        onChange={handleChange('message')}
                      />
                      <p className='error_message'>{errors.message}</p>
                    </div>
                    <Button
                      text='Send'
                      className='send_btn'
                      animate={0}
                      type='spring'
                      btnType='submit'
                      stiffness={150}
                      onClick={showModal}
                    />
                  </form>
                )}
              </Formik>

              {formSendModal && (
                <Modal
                  open={formSendModal}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  {messageLoading ? (
                    <span className='loading'>
                      Sending...
                      <LoadingOutlined />
                    </span>
                  ) : (
                    <>
                      <span className='sent' style={{ color: 'green' }}>
                        {messageStatus ? (
                          <>
                            Message sent <CheckOutlined />
                          </>
                        ) : (
                          <span style={{ color: 'red' }}>
                            {' '}
                            Message not sent <CloseOutlined />
                          </span>
                        )}
                      </span>
                    </>
                  )}
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    // </BrowserRouter>
  );
}

export default App;
