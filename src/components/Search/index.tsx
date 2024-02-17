import { SearchContext } from '@/contexts/searchContext'
import {
  CloseOutlined,
  DownOutlined,
  SearchOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Flex, Input } from 'antd'
import { ChangeEvent, useContext, useState } from 'react'

const searchButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
}

const drawerStyles: React.CSSProperties = {
  background: '#1E2C39',
  borderRadius: '0 8px 8px 0',
  position: 'absolute',
  bottom: 60,
  left: 64,
  height: '40px',
  width: '320px',
}

const searchInputBarStyles: React.CSSProperties = {
  background:
    'linear-gradient(to bottom right, #C9C9C94D, #C4C4C41A) padding-box, linear-gradient(to bottom left, #FFFFFF4D, #D3D3D31A) border-box',
  color: '#FFFFFF',
  display: 'flex',
  padding: '0 1rem',
  boxSizing: 'border-box',
  height: '24px',
  width: '100%',
  gap: '20px',
  alignItems: 'center',
}

const controlButtonStyles: React.CSSProperties = {
  all: 'unset',
  color: '#FFFFFF',
  cursor: 'pointer',
}

export const Search = () => {
  // Search drawer functions
  const [searchBarOpen, setSearchBarOpen] = useState(false)

  const showDrawer = () => {
    setSearchBarOpen(true)
  }

  const onClose = () => {
    setSearchBarOpen(false)
  }

  // Search input functions
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
  }

  return (
    <>
      <Button
        className="search-button"
        style={searchButtonStyle}
        shape="circle"
        icon={<SearchOutlined />}
        typeof="primary"
        onClick={showDrawer}
      />
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={searchBarOpen}
        getContainer={document.body}
        style={drawerStyles}
      >
        <Flex
          align="center"
          justify="center"
          gap={8}
          style={{ height: '100%', padding: '0.5rem' }}
        >
          <Input
            type="text"
            value={searchTerm}
            className="searchInputBar"
            placeholder="Digite para buscar..."
            autoFocus
            style={searchInputBarStyles}
            onChange={handleSearchInputChange}
          />
          <Flex gap={8}>
            <Button icon={<UpOutlined />} style={controlButtonStyles} />
            <Button icon={<DownOutlined />} style={controlButtonStyles} />
            <Divider type="vertical" style={{ margin: 0 }} />
            <Button
              icon={<CloseOutlined />}
              style={controlButtonStyles}
              onClick={onClose}
            />
          </Flex>
        </Flex>
      </Drawer>
    </>
  )
}
