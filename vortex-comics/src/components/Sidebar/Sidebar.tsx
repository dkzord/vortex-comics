import React, { useContext, useState } from 'react'
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLogo, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggle, SToggleThumb } from './styles';
import {  GiNinjaHead, GiSecretBook, GiThorHammer } from "react-icons/gi";
import { AiOutlineLeft } from "react-icons/ai";
import { ThemeContext } from "../../App";

import { logoSVG } from '../../assets'
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [ sidebarOpen, setSidebarOpen ] = useState(false);
  const { pathname } = useLocation();

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen(p => !p)}>
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo"/>
      </SLogo>
      <SDivider />
      {linksArray.map(({icon, label, to}) =>(
        <SLinkContainer key={label} isActive={ pathname === to }>
          <SLink to={to} style={!sidebarOpen ? {width: `fit-content`} : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && (<SThemeLabel>Dark Mode</SThemeLabel>)}

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