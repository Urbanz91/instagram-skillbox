export const loadUserInfo = (res) => {
  let obj = {
    type: 'LOAD_USER_INFO',
    id: res.id,
    nickname: res.username,
    firstName: res.first_name,
    lastName: res.last_name,
    link: res.links.html,
    image: res.profile_image.large,
    email: res.email,
    total_likes: res.total_likes,
    total_photos: res.total_photos,
    bio: res.bio
  }
  return obj;
}

// export const getAuthPage = () => {
//   return 
// }