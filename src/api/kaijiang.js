import request from '@/utils/request'
import Util from '@/utils/constants'

const kaijiang = {
    ssc() {
        return request({
            url: Util.sscApi
        })
    },
    bjsc() {
        return request({
            url: Util.bjscApi
        })
    }
}

export default kaijiang