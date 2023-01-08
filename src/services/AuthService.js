import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', { email, password })
    }
    static async registration(name, email, password) {
        return $api.post('/registration', { name, email, password })
    }
    static async logout() {
        return $api.post('/logout')
    }
    static async getProductList() {
        return $api.get('/products')
    }
    static async addOrder(orderdate, userid, orderlist, totalprice) {
        return $api.post('/addorder', { orderdate, userid, orderlist, totalprice })
    }
    static async postOrders(userid) {
        return $api.post('/postorders', { userid })
    }

}

