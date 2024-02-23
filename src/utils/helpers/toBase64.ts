import defaultAvatar from '@/assets/defaultAvatar.svg'

async function toBase64(url: string) {
  const response = await fetch(url)
  const blob = await response.blob()
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}

export const defaultAvatarBase64 = await toBase64(defaultAvatar)
