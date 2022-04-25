//这是用来发送异步ajax请求的函数模块
import axios from 'axios';


function Myajax(url, data = {}, methond = "GET") {
    if (methond === "GET") {
        return axios.get(url, {
            params: data
        })
    }
    else {
        return axios.post(url, data)
    }
}

export default Myajax