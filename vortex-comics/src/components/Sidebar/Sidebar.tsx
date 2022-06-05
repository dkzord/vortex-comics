import React, { useContext } from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSidebar, STheme, SThemeLabel, SThemeToggle, SToggleThumb } from './styles';
import {  GiNinjaHead, GiSecretBook, GiThorHammer } from "react-icons/gi";
import { ThemeContext } from "../../App";

import { logoSVG } from '../../assets'

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <SSidebar>
      <>
        <SSidebarButton>
          
        </SSidebarButton>
      </>
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
      <STheme>
        <SThemeLabel>Dark Mode</SThemeLabel>
        <SThemeToggle isActive={ theme === 'dark'} onClick={() => setTheme((p) => (p === 'light' ? 'dark' : 'light'))}>
          <SToggleThumb style={theme === 'dark' ? {right: "1px"} : {}}/>
        </SThemeToggle>
      </STheme>
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