import { useSearch } from '@/utils/hooks/useSearch'
import {
  CloseOutlined,
  DownOutlined,
  SearchOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Flex, Input, InputRef } from 'antd'
import { useRef, useState } from 'react'
import './styles.css'

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

  const inputRef = useRef<InputRef | null>(null)

  const showDrawer = () => {
    setSearchBarOpen(true)
  }

  const handleInputAutoFocus = () => {
    inputRef.current && inputRef.current.focus()
  }

  const onClose = () => {
    setSearchBarOpen(false)
  }

  // useSearch custom hook
  const {
    searchTerm,
    handleSearchInputChange,
    handleNextHighlight,
    handlePrevHighlight,
    isNextDisabled,
    isPrevDisabled,
  } = useSearch()

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
        mask={false}
        style={drawerStyles}
        afterOpenChange={handleInputAutoFocus}
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
            ref={inputRef}
            autoFocus
            className="search-input-bar"
            placeholder="Digite para buscar..."
            style={searchInputBarStyles}
            onChange={handleSearchInputChange}
          />
          <Flex gap={8}>
            <Button
              icon={<UpOutlined />}
              className="search-button-next"
              style={controlButtonStyles}
              onClick={handleNextHighlight}
              disabled={isNextDisabled}
            />
            <Button
              icon={<DownOutlined />}
              className="search-button-prev"
              style={controlButtonStyles}
              onClick={handlePrevHighlight}
              disabled={isPrevDisabled}
            />
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
