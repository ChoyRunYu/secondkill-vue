import request from '@/utils/request'

/**
 * 获取秒杀商品列表
 */
export function getMsGoodsList(){
    return request({
        url: '/api/goods/listMsGoods',
        method: 'get'
    })
}

/**
 * 根据秒杀商品id获取秒杀商品详情
 */
export function getMsGoodsDetail(msGoodsId){
    return request({
        url: '/api/goods/msGoods/detail/' + msGoodsId,
        method: 'get'
    })
}

/**
 * 搜索获取秒杀商品列表
 */
 export function getMsGoodsListSearch(keyword){
    return request({
        url: '/api/goods/listMsGoods/' + keyword,
        method: 'get'
    })
}
