import ImageProfile from '@/components/profile/imageProfile'
import { Flex } from 'antd'
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
    </>
  )
}
