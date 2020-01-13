import { baseUrl } from '@/config/env'
import axios from './http'
/**
 * 系统管理模块
 */
const commonApi = {
  // 登录页面
  login (param) {
    return axios.post(`${baseUrl}/syslogin/login`, param)
  },
  // 根据role获取对应的菜单
  getMenuData (params) {
    return axios.post(`${baseUrl}/sysMenu/getMenuData`, params)
  },
  // 获取所有manu的情况
  getAllMenuData (params) {
    return axios.post(`${baseUrl}/sysMenu/getAllMenuData`, params)
  },
  // 根据userID获取对应的菜单
  getDeptDataByUserID (params) {
    return axios.post(`${baseUrl}/sysDept/getDeptDataByUserID`, params)
  },
  // 获取所有部门的情况
  getAllDeptData (params) {
    return axios.post(`${baseUrl}/sysDept/getAllDeptData`, params)
  }
}

export {
  commonApi
}
