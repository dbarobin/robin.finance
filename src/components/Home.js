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
        I'm a partner at <Code>Exin</Code>, a startup firm focused on cryptocurrencies.
      </p>

       <p style={s.p}>
        I have a history of many years in the Internet but have a particular interest in finance, including CeFi and DeFi.
      </p>

       <p style={s.p}>
        Meanwhile, I'm committed to the promotion of privacy technology and the popularity of blockchain, cryptocurrency, and bitcoin.
      </p>

      <Interactive
        as="a"
        href="https://twitter.com/vrwio"
        {...s.link}
      >Twitter</Interactive>

      &nbsp;

      <Interactive
        as="a"
        href="https://dbarobin.com"
        {...s.link}
      >Blog</Interactive>

      &nbsp;

      <Interactive
        as="a"
        href="mailto:blockxyz@gmail.com"
        {...s.link}
      >Email</Interactive>

      &nbsp;

      <Interactive
        as="a"
        href="https://keyserver.ubuntu.com/pks/lookup?search=0x9CD45A5A&fingerprint=on&op=index"
        {...s.link}
      >PGP</Interactive>
    </div>
  );
}
