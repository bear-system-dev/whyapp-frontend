import { Button, Col, ColorPicker, Row } from 'antd'
import { presetBackgroundColors } from './PresetBackgroundColors'
import './styles.css'
import { useDispatchBackGround } from '@/reducer/context/background/backgroundContext'

export const ColorsGrid = () => {
  const { setBackGroundColors } = useDispatchBackGround()

  const generateGradient = (
    color1: string | undefined,
    color2: string | undefined,
  ) => ({
    background: `linear-gradient(${color1}, ${color2})`,
  })

  function handleColorSelection(color1: string, color2: string) {
    color2 = color2 || color1
    setBackGroundColors({ color1, color2 })
    localStorage.setItem(
      'chatBackgroundStyle',
      JSON.stringify({ color1, color2 }),
    )
  }

  function handleColorPickerChange(_: unknown, hex: string) {
    handleColorSelection(hex, hex)
    console.log(hex)
  }

  return (
    <Row gutter={[8, 8]} justify="space-between">
      {presetBackgroundColors.map((button) => (
        <Col key={button.id} span={6}>
          <Button
            className="color-button"
            style={
              button.color
                ? { backgroundColor: button.color }
                : generateGradient(button.color1, button.color2!)
            }
            onClick={() =>
              button.color
                ? handleColorSelection(button.color, button.color)
                : handleColorSelection(button.color1!, button.color2!)
            }
          />
        </Col>
      ))}
      <Col span={6}>
        <ColorPicker
          className="color-button"
          onChange={handleColorPickerChange}
        />
      </Col>
    </Row>
  )
}
