(function () {
  var Options = Class.create({
    initialize: function () {
      this.bg = chrome.extension.getBackgroundPage().bg;
      window.addEventListener("load", function (evt) {
        this.start();
      }.bind(this));
    },
    start: function () {
      this.assignMessages();
      this.assignEventHandlers();
      this.restoreConfigurations();
    },
    assignMessages: function () {
      var hash = {
        "optpop": "optpop",
        "optpopposition": "optpopposition",
        "optpopposition_desc": "optpopposition_desc",
        "optpopbc_color": "optpopbc_color",
        "optpopbc_color_desc": "optpopbc_color_desc",
        "optpopcolor": "optpopcolor",
        "optpopcolor_desc": "optpopcolor_desc",
      };
      for (var key in hash) {
        $(key).innerHTML = chrome.i18n.getMessage(hash[key]);
      }
    },
    assignEventHandlers: function () {
      $("popposition").onclick = this.onClickposition.bind(this);
      $("popbc_color").onclick = this.onClickbc_color.bind(this);
      $("popcolor").onclick = this.onClick_color.bind(this);
    },
    restoreConfigurations: function () {
      $("popposition").value = this.bg.getConfig_position();
      $("popbc_color").value = this.bg.getConfig_bc_color();
      $("popcolor").value = this.bg.getConfig_color();
    },
    onClickposition: function (evt) {
      var value = $("popposition").value;
      this.bg.setConfig_position(value);
    },
    onClickbc_color: function (evt) {
      var value = $("popbc_color").value;
      this.bg.setConfig_bc_color(value);
    },
    onClick_color: function (evt) {
      var value = $("popcolor").value;
      this.bg.setConfig_color(value);
    },
  });
  new Options();
})();
