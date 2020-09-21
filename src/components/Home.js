import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/dbarobin/robin.finance#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <p style={s.p}>
        I'm a partner of <Code>Exin</Code>, a startup firm focused on cryptocurrencies.
      </p>
    </div>
  );
}
