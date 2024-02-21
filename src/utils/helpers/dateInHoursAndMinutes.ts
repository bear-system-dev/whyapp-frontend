const date = new Date()

export const currentHours = date.getHours().toString().padStart(2, '0')

export const currentMinutes = date.getMinutes().toString().padStart(2, '0')
