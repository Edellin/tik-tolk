import {Profile} from './profile.interface';

export interface Chat {
  id: number
  userFirst: Profile
  userSecond: Profile
  messages: []
  companion?: Profile
}

export interface Message {
  id: number
  userFromId: number
  personalChatId: number
  text: string,
  createAt: string
  idRead: boolean
  updateAt: string
  user?: Profile
}

export interface LastMessageResponse {
  id: number
  userFrom: Profile
  message: string
}
