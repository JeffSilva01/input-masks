import React, { InputHTMLAttributes, useCallback, useState } from 'react'
import { IconBaseProps } from 'react-icons'

import useMasks from '../../utils/masks'

import { Container } from './styles'

interface InputMasksProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: 'cel' | 'cpf' | 'cep' | 'cnpj'
  icon?: React.ComponentType<IconBaseProps>
}

const InputMasks: React.FC<InputMasksProps> = ({
  mask,
  icon: Icon,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocus(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocus(false)
  }, [])

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = useMasks(e.currentTarget.value, mask)
  }, [])

  return (
    <Container isFocused={isFocus}>
      {Icon && <Icon size={20} />}
      <input
        type="text"
        {...rest}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  )
}

export default InputMasks
