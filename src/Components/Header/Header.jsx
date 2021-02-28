import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';


const menus = [{ name: 'Launches', url: '/launches' }, { name: 'Astronauts', url: '/astronauts' }, { name: 'Agencies', url: '/agencies' }];

const Header = () => {

    return (
        <div className='header'>
            <div className="ui inverted to fixed menu">
                <div className="header item">
                    All About Space
                </div>
                {menus.map(({ name, url }, index) => {
                    return <NavLink className='item' to={url} key={index}>{name}</NavLink>
                })}

            </div>
            {/* <Menu fixed='top' inverted size='large'>
                <Menu.Item header>All about Space</Menu.Item>
                {menus.map(({ name, url }, index) => {
                    // return <Menu.Item href={url} key={index} name={name} active={activeItem === name} onClick={handleHeaderItemClick} />
                    return <NavLink to={url} key={index}>{name}</NavLink>
                })}



                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                            <NavLink to="/astronauts">Home</NavLink>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu> */}

        </div>
    )
}

export default Header
