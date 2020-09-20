const masks = {
  cel(value: string): string {
    value = value.substring(0, 15)
    value = value.replace(/\D/g, '')
    value = value.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3')
    return value
  },
  cpf(value: string): string {
    value = value.substring(0, 15)
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d)(\d{2})$/, '$1-$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
    return value
  }
}

function useMasks(value: string, type: string): string {
  const mask = masks[type]
  const maskedValue = mask(value)

  return maskedValue
}

export default useMasks
