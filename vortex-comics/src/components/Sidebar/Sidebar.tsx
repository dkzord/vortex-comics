import React from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSidebar } from './styles';

import { logoSVG } from '../../assets'

const Sidebar = () => {
  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo"/>
      </SLogo>
      <SDivider />
      <SLinkContainer>
        <SLink>
          <SLinkIcon>Opa</SLinkIcon>
          <SLinkLabel>Home</SLinkLabel>
          <SLinkNotification>5</SLinkNotification>
        </SLink>
      </SLinkContainer>
    </SSidebar>
  )
}



export default Sidebar