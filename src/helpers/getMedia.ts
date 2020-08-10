export const getMedia = (fileName: string, fileType: string = 'png', directory: string = 'media') => {
  return `https://assets.loganarnett.com${directory ? `/${directory}/` : '/'}${fileName}.${fileType}`;
}