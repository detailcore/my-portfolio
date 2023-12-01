export const useDateFormat = (data: string) => {
  return `${new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(data))}`
}
