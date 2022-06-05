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
      {linksArray.map(({icon, label, notification, to}) =>(
        <SLinkContainer key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
            <SLinkNotification>{notification}</SLinkNotification>
          </SLink>
        </SLinkContainer>
      ))}
    </SSidebar>
  )
}

const linksArray = [
  {
    label: 'HQs / Comics',
    icon: <GiSecretBook />,
    to: '/',
    notification: 1,
  },
  {
    label: 'Personagens',
    icon: <GiNinjaHead />,
    to: '/characters',
    notification: 2,
  },
  {
    label: 'Criadores',
    icon: <GiThorHammer />,
    to: '/creator',
    notification: 3,
  },
]

export default Sidebar