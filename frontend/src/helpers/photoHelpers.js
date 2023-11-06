export const findPhoto = (photos, photoId) => {
  return photos.filter(photo => photo.id === photoId)
};