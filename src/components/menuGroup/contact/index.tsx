import React from 'react'
import ConteinerContact from './components/ConteinerContact'
import NameContact from './components/NameContact'
import { Flex } from 'antd'
import ImageProfile from '@/components/profile/imageProfile'
import CargoProfile from '@/components/profile/cargo'

interface ContactProps {
  image: string
  name: string
  cargo: string
  status: boolean
}
const conteinerCaontactStyle: React.CSSProperties = {
  alignItems: 'center',
  gap: '1rem',
}
const Contact: React.FC<ContactProps> = ({ status, image, name, cargo }) => {
  return (
    <>
      {status ? (
        <ConteinerContact>
          <Flex style={conteinerCaontactStyle}>
            <ImageProfile image={image} size="2.5rem" />
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
        </ConteinerContact>
      ) : (
        <ConteinerContact>
          <Flex style={conteinerCaontactStyle}>
            <ImageProfile image={image} size="2.5rem" />
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
        </ConteinerContact>
      )}
    </>
  )
}
export default Contact
