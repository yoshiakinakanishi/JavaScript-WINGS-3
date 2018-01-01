document.addEventListener('DOMContentLoaded', function() {
    var data = {
        title : 'JavaScript本格入門',
        price : '2800',
        // EventListenerオブジェクトのhandleEvent()メソッドを使用する
        // EventListenerオブジェクトでは、配下のthisがイベントの発生元(要素)ではなく、EventListenerオブジェクト自身を示すので、bindメソッドを介さずに回避できる

        handleEvent : function() { 
            console.log(this.title + '/' + this.price + '円');
        }
    }

    document.getElementById('btn').addEventListener('click', data, false); 
    // 結果：JavaScript本格入門/2800円
    // メソッド(data.handleEve)ではなく、オブジェクト(data)そのものを設定しているので注意！！
}, false)

