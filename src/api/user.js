import request from '@/utils/request'
import md5 from 'md5'

/**
 * 用户登录接口
 */
export function login(data) {
  return request({
    url: '/api/auth/user',
    method: 'post',
    data
  })
}

/**
 * 获取用户信息
 * @returns 
 */
export function getInfo(){
  return request({
    url: '/api/user/info',
    method: 'get'
  })
}


/**
 * 
 * @returns 退出登录
 */
export function logout(){
  return request({
    url: '/api/auth/logout',
    method: 'post'
  })
}


/**
 * 检验用户名是否注册接口
 * @param {*} username 
 * @returns 
 */
export function checkUsername(username){
  return request({
    url: '/api/user/check/' + username,
    method: 'get'
  })
}

/**
 * 注册接口
 * @param {*} username 
 * @param {*} password 
 * @returns 
 */
export function register(username, password){
  return request({
    url: '/api/user/register',
    method: 'post',
    data: { username: username, password: md5(password) }
  })
}
