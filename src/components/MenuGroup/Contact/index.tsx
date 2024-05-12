import UserRole from '@/components/Profile/Role'
import ProfileImage from '@/components/Profile/ProfileImage'
import { Flex } from 'antd'
import React from 'react'
import ContainerContact from './components/ContactContainer'
import NameContact from './components/NameContact'

type ContactProps = {
  image: string
  name: string
  role: string
  status: boolean
}
const containerCaontactStyle: React.CSSProperties = {
  alignItems: 'center',
  gap: '1rem',
}
const Contact: React.FC<ContactProps> = ({ status, image, name, role }) => {
  return (
    <>
      {status ? (
        <ContainerContact>
          <Flex style={containerCaontactStyle}>
            <ProfileImage image={image} size="2.5rem" />
            <Flex vertical>
              <NameContact color={'#FFFFFF'} name={name} />
              <UserRole role={role} />
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
              <UserRole role={role} />
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
