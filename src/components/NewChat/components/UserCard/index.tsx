import ImageProfile from '@/components/profile/imageProfile'
import { Divider, Flex } from 'antd'
import React from 'react'
import NameContact from './components/NameContact'
import './style.css'

interface UserCardProps {
  image: string
  name: string
  onClick: () => void
}
const userCardStyle: React.CSSProperties = {
  alignItems: 'center',
  gap: '1rem',
}

const dividerStyles: React.CSSProperties = {
  background: '#FFFFFF',
  margin: 0,
}

export const UserCard = ({ image, name, onClick }: UserCardProps) => {
  return (
    <>
      <Flex
        className="user-card-container"
        style={userCardStyle}
        onClick={onClick}
      >
        <ImageProfile image={image} size="2.5rem" />
        <Flex vertical>
          <NameContact name={name} />
        </Flex>
      </Flex>
      <Divider style={dividerStyles} />
    </>
  )
}
