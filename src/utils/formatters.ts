export const formatPrice = (amount: number, currency = 'BRL') =>
  amount
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency,
    })
    .replace(/^(\D+)/, '$1 ') // add space between currency and value

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
type OptionsType = {
  weekday: 'long' | 'short' | 'narrow' | undefined
  year: 'numeric' | '2-digit' | undefined
  month: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined
  day: 'numeric' | '2-digit' | undefined
}

const defaultOptions: OptionsType = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export const formatDate = (
  date: Date | string,
  options = defaultOptions,
  language = 'pt-BR'
) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString(language, options)
}
