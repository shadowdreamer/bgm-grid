export const weeks = [
  { value: 1, text: '星期一' },
  { value: 2, text: '星期二' },
  { value: 3, text: '星期三' },
  { value: 4, text: '星期四' },
  { value: 5, text: '星期五' },
  { value: 6, text: '星期六' },
  { value: 7, text: '星期日' }
]


export const enum CollectionType {
  WantToWatch = 1,
  Watched = 2,
  Watching = 3,
  OnHold = 4,
  Dropped = 5
}


export const CollectionTypeText: { [key in CollectionType]: string } = {
  [CollectionType.WantToWatch]: '想看',
  [CollectionType.Watched]: '看过',
  [CollectionType.Watching]: '在看',
  [CollectionType.OnHold]: '搁置',
  [CollectionType.Dropped]: '抛弃'
}

export enum episodeStatus {
  WantToWatch = 1,
  Watched = 2,
  Dropped = 3
}

export const episodeStatusText: { [key in episodeStatus]: string } = {
  [episodeStatus.WantToWatch]: '想看',
  [episodeStatus.Watched]: '看过',
  [episodeStatus.Dropped]: '抛弃'
}
 

export enum SubjectType {
  Book = 1,
  Anime = 2,
  Music = 3,
  Game = 4,
  Real = 6
}

export const SubjectTypeText: { [key in SubjectType]: string } = {
  [SubjectType.Book]: '书籍',
  [SubjectType.Anime]: '动画',
  [SubjectType.Music]: '音乐',
  [SubjectType.Game]: '游戏',
  [SubjectType.Real]: '三次元'
}