import React from 'react'
import '../hamburgermenu/hamburger.scss'
import {
    Drawer,
    DrawerBody,
 
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
   
  } from '@chakra-ui/react'

function Hamburgermenu({onClose,isOpen}) {
   
  const [placement, setPlacement] = React.useState('left')
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
      <DrawerBody>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  )
}

export default Hamburgermenu
