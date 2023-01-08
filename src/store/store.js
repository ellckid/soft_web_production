import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";


export default class Store {
    user = {};
    products = {};
    isAuth = false;
    isLoading = false;
    isActivated = false;
    basket = [];
    order = {};
    orderlist = {};

    constructor() {
        makeAutoObservable(this);

    }
    setAuth(bool) {
        this.isAuth = bool;

    }
    setUser(user) {
        this.user = user;
    }
    setProducts(products) {
        this.products = products;
    }
    setLoading(bool) {
        this.isLoading = bool;
    }
    setActivation(bool) {
        this.isActivated = bool;
    }
    setBasket(mass) {
        this.basket = mass
    }
    setOrder(order) {
        this.order = order;
    }
    setOrderList(orderlist) {
        this.orderlist = orderlist;
    }


    async login(email, password) {
        try {
            console.log(this.isAuth);
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            console.log(this.isAuth);
            this.setUser(response.data.user);
            this.setActivation(response.data.isActivated)
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async registration(name, email, password) {
        try {
            const response = await AuthService.registration(name, email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async logout() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }
    async checkAuth() {
        this.setLoading(true);
        try {

            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
    async getProducts() {
        this.isLoading(true);
        try {
            const response = await axios.get(`${API_URL}/products`, { withCredentials: true })
            console.log(response);
            this.setProducts(response.data);
        } catch (e) {
            console.log(e.response?.data);
        } finally {
            this.isLoading(false)
        }
    }
    async addOrder(orderdate, userid, orderlist, totalprice) {
        try {
            const response = await AuthService.addOrder(orderdate, userid, orderlist, totalprice);
            console.log(response);
        } catch (e) {
            console.log(e.response?.data);
        }
    }
    async postOrders(userid) {
        // this.isLoading(true);
        try {
            console.log(" ")
            console.log(" ")
            console.log("получение списка заказов")
            console.log(" ")
            const response = await axios({
                method: "post",
                url: `${API_URL}/postorders`,
                data: {
                    "userid": `${userid}`
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response)

            this.setOrderList(response.data);
        } catch (e) {
            console.log(e.response?.data);
        } finally {
            console.log(" ")
            console.log(" ")
        }
    }
}

