import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSidebar } from './styles';
import {  GiNinjaHead, GiSecretBook, GiThorHammer } from "react-icons/gi";

import { logoSVG } from '../../assets'

const Sidebar = () => {
  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo"/>
      </SLogo>
      <SDivider />
      {linksArray.map(({icon, label, to}) =>(
        <SLinkContainer key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
    </SSidebar>
  )
}

const linksArray = [
  {
    label: 'HQs / Comics',
    icon: <GiSecretBook />,
    to: '/',
  },
  {
    label: 'Personagens',
    icon: <GiNinjaHead />,
    to: '/characters',
  },
  {
    label: 'Criadores',
    icon: <GiThorHammer />,
    to: '/creator',
  },
]

export default Sidebar