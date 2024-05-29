import { useState } from 'react'
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
]

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': '6FKM32M-9KKMKM8-NRG7SG2-JS0XB2W',
  },
}

const genres = fetch(
  'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name',
  options
)
  .then((response) => response.json())
  .then((response) => console.log(Object.values(response[0])[0]))

console.log(genres)

// fetch(
//   'https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name',
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err))

function GenresComponent() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const [value, setValue] = useState<string | null>(null)

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ))

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val)
        combobox.closeDropdown()
      }}
    >
      <Combobox.Target>
        <Input.Wrapper label="Genres">
          <InputBase
            component="button"
            type="button"
            pointer
            rightSection={<IconChevronDown size={24} stroke={1.5} />}
            rightSectionPointerEvents="none"
            onClick={() => combobox.toggleDropdown()}
          >
            {value || <Input.Placeholder>Select genre</Input.Placeholder>}
          </InputBase>
        </Input.Wrapper>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}

export default GenresComponent
