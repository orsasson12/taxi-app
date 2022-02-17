import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SideBarElements'
const SideBar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink style={{marginBottom:'3rem'}} onClick={toggle} to="about">
                       עלינו
                    </SidebarLink>
                    <SidebarLink  onClick={toggle} to="services">
                        לקוחות מרוצים
                    </SidebarLink>
                    <SidebarLink style={{ marginTop: '4rem' }} onClick={toggle} to="discover">
                        שירותים
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SideBar
