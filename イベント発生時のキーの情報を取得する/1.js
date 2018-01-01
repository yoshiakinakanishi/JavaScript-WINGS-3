document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('key').addEventListener('keydown', function(e) {
        console.log('キーコード：' + e.keyCode);
    }, false)
}, false)