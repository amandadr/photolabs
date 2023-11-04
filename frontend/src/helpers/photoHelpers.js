export const findPhoto = (photos, photoId) => {
  const photo = { ...photos[photoId] };
  return photo;
};

export const toggleLike = (photo) => {
  const toggle = () => {photo.isLiked === false ? true : false};

  return { toggle };
};