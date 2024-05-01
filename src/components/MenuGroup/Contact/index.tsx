import CargoProfile from '@/components/Profile/Cargo'
import ProfileImage from '@/components/Profile/ProfileImage'
import { Flex } from 'antd'
import React from 'react'
import ContainerContact from './components/ContactContainer'
import NameContact from './components/NameContact'

interface ContactProps {
  image: string
  name: string
  cargo: string
  status: boolean
}
const containerCaontactStyle: React.CSSProperties = {
  alignItems: 'center',
  gap: '1rem',
}
const Contact: React.FC<ContactProps> = ({ status, image, name, cargo }) => {
  return (
    <>
      {status ? (
        <ContainerContact>
          <Flex style={containerCaontactStyle}>
            <ProfileImage image={image} size="2.5rem" />
            <Flex vertical>
              <NameContact color={'#FFFFFF'} name={name} />
              <CargoProfile cargo={cargo} />
            </Flex>
          </Flex>
          <div
            style={{
              height: '12px',
              width: '12px',
              borderRadius: '100%',
              backgroundColor: '#00FF04',
            }}
          ></div>
        </ContainerContact>
      ) : (
        <ContainerContact>
          <Flex style={containerCaontactStyle}>
            <ProfileImage image={image} size="2.5rem" />
            <Flex vertical>
              <NameContact color={'#8D8686'} name={name} />
              <CargoProfile cargo={cargo} />
            </Flex>
          </Flex>
          <div
            style={{
              height: '12px',
              width: '12px',
              borderRadius: '100%',
              border: '3px solid #8D8686',
            }}
          ></div>
        </ContainerContact>
      )}
    </>
  )
}
export default Contact
