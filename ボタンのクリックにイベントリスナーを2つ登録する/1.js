/*
イベントリスナーでは、１つのイベントに複数のリスナー関数を登録できる！

クリックボタンを押すと、下記がコンソールで表示される

1:btnがクリックされました　=> このbtnはid属性の値
2:btnがクリックされました

---------------------------------------------------------------------

HTML側
<input type="button" id="btn" value="クリック">

---------------------------------------------------------------------

1.ボタンをクリック
2.リスナー関数(clickListener1, clickListener2)が呼び出される
3.Eventオブジェクトが渡される
function clickListener1(ev) {　=> この引数evがEventオブジェクトを指す
    var objId = ev.target.id;　=> 
    処理
}

---------------------------------------------------------------------

ev.target.id

・イベントが発生したエレメントオブジェクトは、Eventオブジェクトのtargetプロパティで取得できます
・id属性は、targetプロパティのidプロパティで取得できます

*/


document.addEventListener('DOMContentLoaded', function() {

    //1つ目のリスナー関数を定義
    function clickListener1(ev) {
        var objId = ev.target.id;
        console.log('1:' + objId + 'がクリックされました');
    }

    //2つ目のリスナー関数を定義
    function clickListener2(ev) {
        var objId = ev.target.id;
        console.log('2:' + objId + 'がクリックされました');
    }

    var myBtn = document.getElementById('btn');

    //addEventListener()メソッドで、リスナー関数(clicklListener1, clickListener2)の2つを登録
    myBtn.addEventListener('click', clickListener1, false);
    myBtn.addEventListener('click', clickListener2, false);

}, false)
