import './styles.scss';

import { Link } from 'react-scroll';

import {
  UserOutlined,
  HomeOutlined,
  StarOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';

const Navigation = () => {
  // const [current, setCurrent] = useState('mail');

  // const onClick = (e) => {
  //   console.log('click ', e);
  //   setCurrent(e.key);
  // };

  const items = [
    {
      label: (
        <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>
          <HomeOutlined className='icons' />
          Home
        </Link>
      ),
    },
    {
      label: (
        <Link to='about' spy={true} smooth={true} offset={-20} duration={500}>
          <UserOutlined className='icons' />
          About
        </Link>
      ),
    },

    {
      label: (
        <Link to='works' spy={true} smooth={true} offset={-10} duration={500}>
          <StarOutlined className='icons' />
          Works
        </Link>
      ),
    },

    {
      label: (
        <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
          <PhoneOutlined className='icons' />
          Contact me
        </Link>
      ),
    },
  ];

  const [click, setClick] = useState(false);
  // const handleClick = (id) => {
  //   addEventListener('click', (e) => {
  //     if (e.target == id) {
  //     }
  //   });
  // };
  return (
    <div className='nav_wrapper'>
      {/* <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode='horizontal'
        items={items}
      /> */}

      <ul className={click ? 'nav_menu active' : 'nav_menu'}>
        {items.map((item) => {
          const { label, icon } = item;
          return (
            <li>
              {icon}
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
