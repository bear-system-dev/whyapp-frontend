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

const Contact: React.FC<ContactProps> = ({ status, image, name, cargo }) => {
  return (
    <>
      {status ? (
        <ConteinerContact>
          <Flex>
            <ImageProfile image={image} size="3rem" />
            <Flex vertical>
              <NameContact color={'#FFFFFF'} name={name} />
              <CargoProfile cargo={cargo} />
            </Flex>
          </Flex>
          <div
            style={{
              height: '18px',
              width: '18px',
              borderRadius: '100%',
              backgroundColor: '#00FF04',
            }}
          ></div>
        </ConteinerContact>
      ) : (
        <ConteinerContact>
          <Flex>
            <ImageProfile image={image} size="3rem" />
            <Flex vertical>
              <NameContact color={'#8D8686'} name={name} />
              <CargoProfile cargo={cargo} />
            </Flex>
          </Flex>
          <div
            style={{
              height: '18px',
              width: '18px',
              borderRadius: '100%',
              border: '6px solid #8D8686',
            }}
          ></div>
        </ConteinerContact>
      )}
    </>
  )
}
export default Contact
