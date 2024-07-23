import { Flex, Select } from 'antd'
import { ColorsGrid } from './ColorsGrid'
import './styles.css'
import { Theme, useDispatchTheme } from '@/reducer/context/theme/themeContext'

export const Customize = () => {
  const { setTheme } = useDispatchTheme()

  const handleThemeChange = (value: Theme) => {
    setTheme(value)
    console.log(`Tema selecionado ${value}`)
    localStorage.setItem('appTheme', value)
  }

  return (
    <Flex vertical align="center" gap={8}>
      <h2 style={{ alignSelf: 'start', fontSize: '1rem' }}>Customização</h2>
      <Flex vertical align="center" gap={16} style={{ width: '100%' }}>
        <Flex vertical>
          <h3 style={{ fontSize: '0.875rem' }}>Tema</h3>
          <span>Tema de cores do WhyApp</span>
          <Select
            className="theme-select"
            defaultValue="dark"
            onChange={handleThemeChange}
            options={[
              { value: 'light', label: 'Claro' },
              { value: 'dark', label: 'Escuro' },
            ]}
            style={{ margin: '1rem 0' }}
          />
          <h3 style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            Plano de Fundo
          </h3>
          <ColorsGrid />
        </Flex>
      </Flex>
    </Flex>
  )
}
