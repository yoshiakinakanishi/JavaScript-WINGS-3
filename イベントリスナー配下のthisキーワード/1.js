document.addEventListener('DOMContentLoaded', function() {
    var data = {
        title : 'JavaScript本格入門',
        price : '2800',
        show : function() {
            console.log(this.title + '/' + this.price + '円');
        }
    }

    document.getElementById('btn').addEventListener('click', data.show, false); // 結果： /undefined円
    document.getElementById('btn').addEventListener('click', data.show.bind(data), false); // 結果：JavaScript本格入門/2800円

}, false)

/*
結果： /undefined円

イベントリスナー配下のthisキーワードは、イベントの発生元(要素)となる！！ => ここでがdocment.getElementById('btn')となる
したがって、this.title／this.priceは、data.title／data.priceとはなってくれない

結果：JavaScript本格入門/2800円

この不具合を回避するには、bind()メソッドを使う => Functionオブジェクトのbindメソッド

bind()メソッドの構文は
func.bind(that [,arg1 [arg2 [,...]]])
func：関数オブジェクト
arg1、arg2...：関数に渡す引数
that：関数の中でthisキーワードが示すもの

thatの箇所にはdataを入れる => thisがオブジェクトdataを指すので「JavaScript本格入門／2800円」と表示される

*/