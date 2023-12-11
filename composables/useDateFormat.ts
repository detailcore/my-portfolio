export const useDateFormat = (data: string, isShort = false) => {
  if (isShort) return new Date(data).getFullYear()

  return `${new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(data))}`
}
