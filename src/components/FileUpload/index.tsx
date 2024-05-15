import { PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Image, Upload, UploadFile, UploadProps } from 'antd'
import React, { useState } from 'react'
import './style.css'

const gradient = 'linear-gradient(to right, #1E2C39, #2B4156)'

const buttonStyle: React.CSSProperties = {
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  background: gradient,
}
const confirmButtonStyle: React.CSSProperties = {
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  backgroundColor: '#2B4156',
  width: '100%',
}

export const UploadFiles = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined
        style={{
          color: 'white',
        }}
      />
      <div style={{ marginTop: 8, color: 'white' }}>Upload</div>
    </button>
  )

  return (
    <Flex
      style={{
        position: 'absolute',
        backgroundColor: '#17212B',
        height: 'fit-content',
        borderRadius: '14px',
        width: 'fit-content',
        minWidth: '250px',
        bottom: '50px',
        margin: '14px',
        display: 'flex',
        flexDirection: 'column',
        padding: '14px 24px',
        gap: '14px',
      }}
    >
      {isClicked ? (
        <Flex vertical align="center" gap={24}>
          <h4
            style={{
              color: 'white',
            }}
          >
            Compartilhe arquivos ...
          </h4>
          <Flex>
            {previewImage ? (
              <Image
                wrapperStyle={{ display: 'none' }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
                alt=""
              />
            ) : (
              <Upload
                action={''}
                listType="picture-circle"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
              >
                {fileList?.length >= 8 ? null : uploadButton}
              </Upload>
            )}
          </Flex>
          <Flex gap={24}>
            <Button
              style={confirmButtonStyle}
              onClick={() => setIsClicked(!isClicked)}
            >
              Voltar
            </Button>
            <Button style={confirmButtonStyle}>Compartilhar</Button>
          </Flex>
        </Flex>
      ) : (
        <>
          <Button style={buttonStyle} onClick={() => setIsClicked(!isClicked)}>
            Fotos e videos
          </Button>
          <Button style={buttonStyle} onClick={() => setIsClicked(!isClicked)}>
            Documentos
          </Button>
          <Button style={buttonStyle} onClick={() => setIsClicked(!isClicked)}>
            Figurinhas
          </Button>
        </>
      )}
    </Flex>
  )
}
