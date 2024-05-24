import { useState } from 'react'
import { Tabs } from '@mantine/core'

function TabsComponent() {
  const [activeTab, setActiveTab] = useState<string | null>('movies')

  return (
    <Tabs
      orientation="vertical"
      variant="pills"
      color="#E5D5FA"
      radius="8px"
      value={activeTab}
      onChange={setActiveTab}
    >
      <Tabs.List
        style={{
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: '700',
          color: '#9854F6',
          flexGrow: 1,
        }}
      >
        <Tabs.Tab value="movies" style={{ padding: '10px' }}>
          Movies
        </Tabs.Tab>
        <Tabs.Tab value="rated movies">Rated movies</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}

export default TabsComponent
