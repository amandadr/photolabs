export const findPhoto = (photos, photoId) => {
  const photo = { ...photos[photoId] };
  return photo;
};