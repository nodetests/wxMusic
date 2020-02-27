import fly from './index.js' 
const API_HOST = 'http://49.233.66.125:3000/' 
export default{
  // 首页
  getBanners(){
   return fly.get('/banner')
  },
  getRecommend(){
   return fly.get('/personalized')
  },
  getNewsong(){
    return fly.get('/top/song')
  },
  getAlbum(){
    return fly.get('/album/newest')
  },
  getShow(){
    return fly.get('/dj/today/perfered')
  },
  getnewSongs(){
    return fly.get('/personalized/newsong')
  },
  getnewRank(){
   return fly.get('/top/list?idx=0')
  },
  // 歌手
  // /artist/list?cat=1001&initial=b
  getArtist(cat,initial){
    return fly.get(`/artist/list?cat=${cat}&initial=${initial}`)
  },
  //  歌手详情
  // 获取歌手单曲
  getArtists(id){
    return fly.get(`/artists?id=${id}`)
  },
  // 获取歌手 mv
  getArtistmv(id){
    return fly.get(`/artist/mv?id=${id}`)
  },
  // 获取歌手专辑
  getArtistalbum(id){
    return fly.get(`/artist/album?id=${id}`)
  },
  // 歌手描述
  getArtistdesc(id){
    return fly.get(`/artist/desc?id=${id}`)
  },
  // 获取相似歌手
  getArtistsimi(id){
    return fly.get(`/simi/artist?id=${id}`)
  },
  // 电台
  getdjDetail(id){
    return fly.get(`/dj/detail?rid=${id}`)
  },
  // 歌单
  //  获取相似歌单
  getsimiPlaylist(id){
    return fly.get(`/simi/playlist?id=${id}`)
  },
  // 歌单分类
  getCatlist(){
  return fly.get(`/playlist/catlist`)
  },
  getHotCatlist(){
    return fly.get('/playlist/hot')
  },
  getRecomlist(id){
    return fly.get(`/related/playlist?id=${id}`)
  },
 
  // 获取歌单详情
  getCatlistDetail(id){
    return fly.get(`/playlist/detail?id=${id}`)
    },
  // 歌曲
  // 获取相似音乐
  getsimiSong(id){
    return fly.get(`/simi/song?id=${id}`)
  },
  // 获取音乐 url
  getMusic(id){
    return fly.get(`/song/url?id=${id}`)
  },
  // 搜索
  // getSearch(keywords,type){
  //   return fly.get(`/search?keywords=${keywords}&type=${type}`)
  // },
  getSearch(keywords,type){
    return fly.get(`/search?keywords=${keywords}&type=${type}`)
  },
  getSearchRecomment(keywords){
    return fly.get(`/search/suggest?keywords=${keywords}&type=mobile`)
  },
  // 默认搜索关键词
  getMultimatch(keywords){
    return fly.get(`/search/multimatch?keywords=${keywords}`)
  },
  // 登录注册
  // 通过手机登录
  login(phone,password){
    return fly.get(`/login/cellphone?phone=${phone}&password=${password}`)
  },
  // 通过邮箱登录
  login(email,password){
    return fly.get(`/login?email=${email}&password=${password}`)
  },
  // 刷新登录状态
  loginRefresh(){
    return fly.get('/login/refresh')
  },
  //  注册
  //发送验证码
  captcha(phone){
    return fly.get(`/captcha/sent?phone=${phone}`)
  },
  // 验证验证码
  ctcode(phone,captcha){
    return fly.get(`/captcha/verify?phone=${phone}&captcha=${captcha}`)
  },
  // 注册
  register(phone,password,captcha,nickname){
    return fly.get(`/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&nickname=${nickname}`)
  },
  // 检测是否已经注册
  existence(){
    return fly.get(`/cellphone/existence/check?phone=${phone}`)
  },
  // 推出登录
  loginOut(){
    return fly.get(`/logout`)
  },
  getSongurl(id){
    return fly.get(`/song/url?id=${id}`)
  },
  getSongdetail(id){
    return fly.get(`/song/detail?id=${id}`)
  },
//   // 获取大分类
//   getCats(){
//     return fly.get('/cats/lv2/statistics')
//   },
//   // 获取小分类
//   getMinor(){
//     return fly.get('/cats/lv2')
//   },
//   getCatsBooks(gender, type, major, minor, start,limit){
//       if (minor) {
//         return fly.get(`/book/by-categories?gender=${gender}&type=${type}&major=${major}&minor=${minor}&start=${start}&limit=${limit}`)
//       } else {
//         return fly.get(`/book/by-categories?gender=${gender}&type=${type}&major=${major}&start=${start}&limit=${limit}`)
//       }
//   },
//   // 书籍详情
//   bookInfo(book_id){
//     return fly.get(`/book/${book_id}`)
//   },
//   // 相关推荐
//   relatedRecommendedBooks(book_id){
//     return fly.get(`/book/${book_id}/recommend`)
//   },
//   // 书籍搜索
//   bookSearch(content,page){
//     return fly.get(`/book/fuzzy-search?start=${page}&limit=50&v=1&query=${content}`)
//   },
//   // 获取搜索热词
//   hotWord(){
//     return fly.get('/book/hot-word')
//   },
//   // 书单
//   bookList(){
//     return fly.get('/book-list')
//   },
//   comment(book_id){
//     return fly.get(`/post/short-review?book=${book_id}&total=true&sortType=newest`)
//   },
//    // 书源  注意：第一个优质书源为收费源
//   bookSources(book_id){
//     return fly.get(`/atoc?view=summary&book=${book_id}`)
//   },
//   // bookSources(id){
//   //  return fly.get(`/atoc/${id}?view=chapters`)
//   // },
//    // 书籍章节 根据书id
//   bookChaptersBookId(book_id){
//     return fly.get(`/mix-atoc/${book_id}?view=chapters`)
//   },
//    // 章节内容
//   chapterContent(link){
//     return fly.get(`https://chapter2.zhuishushenqi.com/chapter/${encodeURIComponent(link)}`)
//   },
//   rankCategory(){
//     return fly.get(`/ranking/gender`)
//   },
//   rankInfo(rank_id) { 
//     return fly.get(`/ranking/${rank_id}`)
//   }
}
