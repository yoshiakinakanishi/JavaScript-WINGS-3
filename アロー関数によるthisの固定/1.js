
//渡された要素(elem)が何回クリックされたかをカウントして、ログに出力するCounterクラス

document.addEventListener('DOMContentLoaded', function() {

    var Counter = function(elem) {
        this.count = 0;
        this.elem = elem;

        /*
        elem.addEventListener('click', function() {
            this.count++;
            this.show();
        }, false)
        */

        elem.addEventListener('click', () => {　//アロー関数を使用する
            this.count++;
            this.show();
        }, false);

}

    //カウンター情報を表示するためのshowメソッド
    Counter.prototype.show = function() {
        console.log(this.elem.id + 'は' + this.count + '回クリックされました');
        //btnは1回クリックされました
        //btnは2回クリックされました
        //btnは3回クリックされました・・・
    }

    //id属性(btn)にカウンターをひも付け
    var c = new Counter(document.getElementById('btn'));

}, false);

/*
イベントリスナー配下ではthisはイベントの要素の発生元なので、ここでのthisはConterを指さない
this.show is not a functionというエラーが出る => this.showは関数ではありません
*/

/*
アロー関数では、thisはアロー関数自身が宣言された場所によって決まる
コンストラクターが示すthis(インスタンスそのもの)を指す => thisはCounterとなる!!
*/
