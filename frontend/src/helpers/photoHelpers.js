export const findPhoto = (photos, photoId) => {
  const photo = photos.filter(photo => photo.id === photoId)
  return photo[0];
};