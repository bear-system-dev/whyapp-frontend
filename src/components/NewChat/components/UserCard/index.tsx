import ImageProfile from '@/components/profile/imageProfile'
import { Flex } from 'antd'
import React from 'react'
import NameContact from './components/NameContact'

interface UserCardProps {
  image: string
  name: string
}
const userCardStyle: React.CSSProperties = {
  alignItems: 'center',
  gap: '1rem',
}
export const UserCard = ({ image, name }: UserCardProps) => {
  return (
    <Flex style={userCardStyle}>
      <ImageProfile image={image} size="2.5rem" />
      <Flex vertical>
        <NameContact name={name} />
      </Flex>
    </Flex>
  )
}
