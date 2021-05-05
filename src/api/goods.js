import request from '@/utils/request'

/**
 * 获取秒杀商品列表
 */
export function getMsGoodsList(){
    return request({
        url: '/goods/listMsGoods',
        method: 'get'
    })
}

/**
 * 根据秒杀商品id获取秒杀商品详情
 */
export function getMsGoodsDetail(msGoodsId){
    return request({
        url: '/goods/msGoods/detail/' + msGoodsId,
        method: 'get'
    })
}

/**
 * 搜索获取秒杀商品列表
 */
 export function getMsGoodsListSearch(keyword){
    return request({
        url: '/goods/listMsGoods/' + keyword,
        method: 'get'
    })
}
