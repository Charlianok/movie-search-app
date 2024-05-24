import { Flex, Image, Title } from '@mantine/core'

function LogoComponent() {
  return (
    <Flex gap={12} align="center">
      <Image src="src\logo.svg" h={32} w={32} />
      <Title
        order={2}
        style={{
          color: '#9854F6',
        }}
      >
        ArrowFlicks
      </Title>
    </Flex>
  )
}

export default LogoComponent
