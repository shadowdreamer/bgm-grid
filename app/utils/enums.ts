export const weeks = [
  { value: 1, text: '星期一' },
  { value: 2, text: '星期二' },
  { value: 3, text: '星期三' },
  { value: 4, text: '星期四' },
  { value: 5, text: '星期五' },
  { value: 6, text: '星期六' },
  { value: 7, text: '星期日' }
]
export const enum episodeStatus {
  WantToWatch = 1,
  Watched = 2,
  Dropped = 3
}
export const episodeStatusKeys = {
  '1':'WantToWatch',
  '2':'Watched',
  '3':'Dropped'
}
export const episodeStatusText: { [key in episodeStatus]: string } = {
  [episodeStatus.WantToWatch]: '想看',
  [episodeStatus.Watched]: '看过',
  [episodeStatus.Dropped]: '抛弃'
}
 