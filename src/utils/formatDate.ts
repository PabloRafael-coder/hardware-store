export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  })
}
