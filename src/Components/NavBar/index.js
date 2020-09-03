import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import RepairButton from '../RepairRequest'
import PopoverLogin from '../popoverLogin'

//css
import '../../Pages/Home/Home.css'

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  // useEffect(() => {
  //   userLogged()
  // })

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand className="logo-all" href='/'>BossRepair</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className='justify-content-end' isOpen={isOpen} navbar>
          <Nav className='' navbar>
            <UncontrolledDropdown className='mr-4' nav inNavbar>
              <DropdownToggle nav caret>
                Categorías
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Electrónica
                </DropdownItem>
                <DropdownItem>
                  Electricidad
                </DropdownItem>
                <DropdownItem>
                  Línea Blanca
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Others
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <RepairButton />
            <PopoverLogin />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
