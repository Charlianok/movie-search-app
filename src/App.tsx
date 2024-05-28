import { AppShell, Flex, Text } from '@mantine/core'
import LogoComponent from './components/Logo/LogoComponent'
import TabsComponent from './components/Tabs/TabsComponent'
import GenresComponent from './components/Dropdown/GenresComponent'

function App() {
  return (
    <AppShell
      navbar={{
        width: 280,
        breakpoint: 'sm',
      }}
      padding="md"
    >
      <AppShell.Navbar
        style={{
          backgroundColor: '#F2EBF9',
          padding: '24px',
        }}
      >
        <Flex direction="column" gap="80px">
          <LogoComponent />
          <TabsComponent />
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main style={{ margin: '24px 90px' }}>
        <Text
          style={{
            color: '#000000',
            fontFamily: 'Inter',
            fontWeight: '700',
            fontSize: '32px',
          }}
        >
          Movies
        </Text>
        <GenresComponent></GenresComponent>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
