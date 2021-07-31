import request from '@/utils/request'

/**
 * 点击立即抢购按钮校验库存
 * @param {*} msGoodsId 
 * @returns 
 */
export function checkStock(msGoodsId){
  return request({
    url: '/api/order/checkStock/' + msGoodsId,
    method: 'get'
  })
}

/**
 * 获取确认订单信息
 * @param {*} msGoodsId 
 */
export function buy(msGoodsId){
  return request({
    url: '/api/order/buy/' + msGoodsId,
    method: 'get'
  })
}


/**
 * 创建订单接口--下单接口
 * @param {*} msGoodsId 
 * @returns 
 */
export function createOrder(msGoodsId){
  return request({
    url: '/api/order/createOrder/' + msGoodsId,
    method: 'post'
  })
}

/**
 * 根据订单id获取订单信息接口
 * @param {*} orderId 
 * @returns 
 */
export function getOrderById(orderId){
  return request({
    url: '/api/order/getById/' + orderId,
    method: 'get'
  })
}

/**
 * 支付接口
 * @param {*} orderId 
 */
export function pay(orderId){
  return request({
    url: '/api/order/payOrder/' + orderId,
    method: 'post'
  })
}

/**
 * 列出该用户的所有订单
 * @returns
 */
 export function listOrderByUser() {
  return request({
    url: '/api/order/listOrder',
    method: 'get'
  })
}
