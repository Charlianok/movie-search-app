import { Combobox, useCombobox } from '@mantine/core'

function DropdownComponent() {
  const combobox = useCombobox()

  return <Combobox store={combobox}>{/* Your implementation */}</Combobox>
}

export default DropdownComponent
