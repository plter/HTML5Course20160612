/**
 * Created by plter on 6/20/16.
 */


(function () {


    /**
     * 用于求出两个数字的最大值
     * @param a {number} 传入的第一个数字
     * @param b {number} 传入的第二个数字
     * @returns {number}
     */
    function max(a, b) {
        return a > b ? a : b;//返回最大值
    }
    
    function Main() {
        var h = new Hello();
        h.sayHello();
    }

    new Main();
});