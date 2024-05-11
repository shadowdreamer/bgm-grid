import {genGet,genPost} from './request'

export const getME = genGet('/v0/me')

export const getCollections = function(username){
  return genGet(`/v0/users/${username}/collections`)
}