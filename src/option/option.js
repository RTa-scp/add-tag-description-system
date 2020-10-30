// 設定画面で保存ボタンを押されたら
function save_options() {
    
  // 設定値を変数に格納  
  var popposition = document.getElementById('popposition').value;
  var popbc_color = document.getElementById('popbc_color').value;
  var popcolor = document.getElementById('popcolor').value;

  // chromeアカウントと紐づくストレージに保存
  chrome.storage.sync.set({
    selected_popposition: popposition,
    selected_popbc_color: popbc_color,
    selected_popcolor: popcolor
    
  }, function() {
    // 保存できたら、画面にメッセージを表示(0.75秒だけ)
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// 設定画面で設定を表示する
function restore_options() {
  // デフォルト値は、ここで設定する
  chrome.storage.sync.get({
    selected_popposition: 'homing',
    selected_popbc_color: 'white',
    selected_popcolor: '#333'
    
  // 保存された値があったら、それを使う
  }, function(items) {
    document.getElementById('popposition').value = items.selected_popposition;
    document.getElementById('popbc_color').value = items.selected_popbc_color;
    document.getElementById('popcolor').value = items.selected_popcolor;
  });
}

// 画面表示と保存ボタンのイベントを設定
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);