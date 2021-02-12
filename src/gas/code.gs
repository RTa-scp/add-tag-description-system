var tagsjp = [];
var tagsen = [];
var tagscn = [];
var catjp = [];
var caten = [];
var catcn = [];
var ca;
var tag_num = [];
var tag_ini = [
  ['safe', '<em>scp</em>、<em>scp-jp</em>或いはそれらに類するタグが付けられた記事には<a href="/object-classes">オブジェクトクラス</a>のタグも付ける必要があります。二種類のオブジェクトクラスが併記してある過去のSCP報告書(例:safe/euclid)には、その両方のクラスがタグ付けされています。しかし、現在そのような報告書の作成は許可されていないため、これは当該記事が修正、もしくは削除されるまでの間、後世のためにのみ存在する形式です。', 'メジャータグ',,1],
  ['euclid', '<em>scp</em>、<em>scp-jp</em>或いはそれらに類するタグが付けられた記事には<a href="/object-classes">オブジェクトクラス</a>のタグも付ける必要があります。二種類のオブジェクトクラスが併記してある過去のSCP報告書(例:safe/euclid)には、その両方のクラスがタグ付けされています。しかし、現在そのような報告書の作成は許可されていないため、これは当該記事が修正、もしくは削除されるまでの間、後世のためにのみ存在する形式です。', 'メジャータグ',,1],
  ['keter', '<em>scp</em>、<em>scp-jp</em>或いはそれらに類するタグが付けられた記事には<a href="/object-classes">オブジェクトクラス</a>のタグも付ける必要があります。二種類のオブジェクトクラスが併記してある過去のSCP報告書(例:safe/euclid)には、その両方のクラスがタグ付けされています。しかし、現在そのような報告書の作成は許可されていないため、これは当該記事が修正、もしくは削除されるまでの間、後世のためにのみ存在する形式です。', 'メジャータグ',,1],
  ['thaumiel', '<em>scp</em>、<em>scp-jp</em>或いはそれらに類するタグが付けられた記事には<a href="/object-classes">オブジェクトクラス</a>のタグも付ける必要があります。二種類のオブジェクトクラスが併記してある過去のSCP報告書(例:safe/euclid)には、その両方のクラスがタグ付けされています。しかし、現在そのような報告書の作成は許可されていないため、これは当該記事が修正、もしくは削除されるまでの間、後世のためにのみ存在する形式です。', 'メジャータグ',,1],
  ['neutralized', '<em>scp</em>、<em>scp-jp</em>或いはそれらに類するタグが付けられた記事には<a href="/object-classes">オブジェクトクラス</a>のタグも付ける必要があります。二種類のオブジェクトクラスが併記してある過去のSCP報告書(例:safe/euclid)には、その両方のクラスがタグ付けされています。しかし、現在そのような報告書の作成は許可されていないため、これは当該記事が修正、もしくは削除されるまでの間、後世のためにのみ存在する形式です。', 'メジャータグ',,1],
  ['esoteric-class', '<em>scp</em>、<em>scp-jp</em>或いはそれらに類するタグが付けられた記事には<a href="/object-classes">オブジェクトクラス</a>のタグも付ける必要があります。二種類のオブジェクトクラスが併記してある過去のSCP報告書(例:safe/euclid)には、その両方のクラスがタグ付けされています。しかし、現在そのような報告書の作成は許可されていないため、これは当該記事が修正、もしくは削除されるまでの間、後世のためにのみ存在する形式です。', 'メジャータグ',,1],
  ['archived', 'SCPのサブクラスを表すタグです。通常のオブジェクトクラスタグと併記してください。もし特殊なオブジェクトクラスが割り振られている場合は<em>esoteric-class</em>タグをご利用ください。', 'メジャータグ',,1],
  ['decommissioned', 'SCPのサブクラスを表すタグです。通常のオブジェクトクラスタグと併記してください。もし特殊なオブジェクトクラスが割り振られている場合は<em>esoteric-class</em>タグをご利用ください。', 'メジャータグ',,1],
  ['joke', 'SCPのサブクラスを表すタグです。通常のオブジェクトクラスタグと併記してください。もし特殊なオブジェクトクラスが割り振られている場合は<em>esoteric-class</em>タグをご利用ください。', 'メジャータグ',,1],
  ['白', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3],
  ['青', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3],
  ['緑', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3],
  ['黄', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3],
  ['橙', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3],
  ['赤', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3],
  ['黒', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3],
  ['未定', 'SCP-FR記事を中心とした、"脅威レベル"が付与されている記事に使用されるタグです。"脅威レベル"の付与基準については<a href="http://ja.scp-wiki.net/niveaux-de-menace-des-objets-scp">SCPオブジェクトの脅威レベル</a>を参考にしてください。', 'SCP-JP用メジャータグ',,3]
];
//  var tag_inien=[['cupid2021','Of or related to the <a href="http://www.scpwiki.com/cupid-contest-2021">Cupid Contest 2021</a>.','Other Tags']];//
　
var tag_inien = [
  ['', '', '']
];
var tag_inicn = [
  ['safe', '所有SCP条目均需要添加对应的项目等级标签。如果没有、无法确定项目等级，或者为非标准等级时则需要添加“**机密分级**”。', '', 'safe'],
  ['euclid', '所有SCP条目均需要添加对应的项目等级标签。如果没有、无法确定项目等级，或者为非标准等级时则需要添加“**机密分级**”。', '', 'euclid'],
  ['keter', '所有SCP条目均需要添加对应的项目等级标签。如果没有、无法确定项目等级，或者为非标准等级时则需要添加“**机密分级**”。', '', 'keter'],
  ['thaumiel', '所有SCP条目均需要添加对应的项目等级标签。如果没有、无法确定项目等级，或者为非标准等级时则需要添加“**机密分级**”。', '', 'thaumiel'],
  ['无效化', '所有SCP条目均需要添加对应的项目等级标签。如果没有、无法确定项目等级，或者为非标准等级时则需要添加“**机密分级**”。', '', 'neutralized'],
  ['机密分级', '所有SCP条目均需要添加对应的项目等级标签。如果没有、无法确定项目等级，或者为非标准等级时则需要添加“**机密分级**”。', '', 'esoteric-class']
];

function main() {
  var jpurl = "http://rtas.wdfiles.com/local--code_/gas%3Ataglistjp/1";
  var enurl = "http://rtas.wdfiles.com/local--code_/gas%3Ataglisten/1";
  var cnurl = "http://rtas.wdfiles.com/local--code_/gas%3Ataglistcn/1";
  var jpresponse = UrlFetchApp.fetch(jpurl).getContentText();
  var enresponse = UrlFetchApp.fetch(enurl).getContentText();
  var cnresponse = UrlFetchApp.fetch(cnurl).getContentText();
  var jpsplitText = jpresponse.split("[[=]]\n+ タグに関するFAQ");
  jpsplitText = jpsplitText[0].split("[[=]]");
  var ensplitText = enresponse.split('[[toc title="Table of Contents"]]\n-----');
  ensplitText = ensplitText[1].split("-----");
  var ensplitText_suba = ensplitText[0].split("[[/tabview]]");
  ensplitText = ensplitText_suba.concat(ensplitText[1]).concat(ensplitText[2]);
  var cnsplitText = cnresponse.split("[[module css]]")[0];
  jpparse(jpsplitText, catjp);
  enparse(ensplitText, caten);
  cnparse(cnsplitText, catcn);
  Logger.log(tagscn);
  //コードA1｜スプレッドシートのシート名を取得
  var sheetnamejp = 'JP';
  //コードA2｜スプレッドシートの設定
  var sheetjp = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnamejp);
  //コードA3｜最終行の取得
  var lastrowjp = sheetjp.getLastRow();
  //コードA4｜2行目以下のデータを削除
  sheetjp.getRange(1, 1, lastrowjp, 4).clear();
  //コードA14｜product_listに格納された配列の値を8行目以下に貼り付け
  sheetjp.getRange(2, 1, tagsjp.length, tagsjp[0].length).setNumberFormat('@').setValues(tagsjp);
  //コードA3｜最終行の取得
  lastrowjp = sheetjp.getLastRow();
  sheetjp.getRange(lastrowjp + 1, 1, tag_ini.length, tag_ini[0].length).setNumberFormat('@').setValues(tag_ini);
  removeDuplicates(sheetnamejp);
  //コードA16｜セルA1
  sheetjp.getRange('A1').setValue("tag");
  //コードA16｜セルB1
  sheetjp.getRange('B1').setValue("discription");
  sheetjp.getRange('C1').setValue("category");
  sheetjp.getRange('D1').setValue("trans");

  var sheetnameen = 'EN';
  //コードA2｜スプレッドシートの設定
  var sheeten = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnameen);
  //コードA3｜最終行の取得
  var lastrowen = sheeten.getLastRow();
  //コードA4｜2行目以下のデータを削除
  sheeten.getRange(1, 1, lastrowen, 4).clear();
  //コードA14｜product_listに格納された配列の値を8行目以下に貼り付け
  sheeten.getRange(2, 1, tagsen.length, tagsen[0].length).setNumberFormat('@').setValues(tagsen);
  //コードA3｜最終行の取得
  lastrowen = sheeten.getLastRow();
  sheeten.getRange(lastrowen + 1, 1, tag_inien.length, tag_inien[0].length).setNumberFormat('@').setValues(tag_inien);
  removeDuplicates(sheetnameen);
  //コードA16｜セルA1
  sheeten.getRange('A1').setValue("tag");
  //コードA16｜セルB1
  sheeten.getRange('B1').setValue("discription");
  sheeten.getRange('C1').setValue("category");
  sheeten.getRange('D1').setValue("trans");

  var sheetnamecn = 'CN';
  //コードA2｜スプレッドシートの設定
  var sheetcn = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetnamecn);
  //コードA3｜最終行の取得
  var lastrowcn = sheetcn.getLastRow();
  //コードA4｜2行目以下のデータを削除
  sheetcn.getRange(1, 1, lastrowcn, 4).clear();
  //コードA14｜product_listに格納された配列の値を8行目以下に貼り付け
  sheetcn.getRange(2, 1, tagscn.length, tagscn[0].length).setNumberFormat('@').setValues(tagscn);
  //コードA3｜最終行の取得
  lastrowcn = sheetcn.getLastRow();
  sheetcn.getRange(lastrowcn + 1, 1, tag_inicn.length, tag_inicn[0].length).setNumberFormat('@').setValues(tag_inicn);
  removeDuplicates(sheetnamecn);
  //コードA16｜セルA1
  sheetcn.getRange('A1').setValue("tag");
  //コードA16｜セルB1
  sheetcn.getRange('B1').setValue("discription");
  sheetcn.getRange('C1').setValue("category");
  sheetcn.getRange('D1').setValue("trans");

  //  Logger.log(tags);
}

function jpparse(text, ret) { /*取得*/
  for (var i = 0; i < text.length; i++) {
    if (text.indexOf("+") != null) {
      var category = text[i].match(/\+{1,3}\*? (.+)/gm);
      if (category != null) {
        if (category.length == 1) {
          ca = category.toString().split(" ")[1];
          ret.push(category.toString().split(" ")[1]);
        }
        if (category.length == 2) {
          ca = category[1].split(" ")[1];
          ret.push(category[1].split(" ")[1]);
        }
      }
    }
    var text_split = [];
    text_split = text[i].split("\n");
    for (var j = 0; j < text_split.length; j++) {
      var ogg = text_split[j].match(/\* \*\*\[\[\[\/system:page\-tags\/tag\/(.+)\|(.+)\]\]\]\*\*\s{0,2}?\-\s{0,2}?(.+)/);
      if (ogg != null) {
        if (ogg[1].indexOf("]]]**") == -1) {
          tagsjp.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), ca, "", i]);
          //        Logger.log(ogg[1]);
        }
      }
      var ogg = text_split[j].match(/\* \*\*\[\[\[\/system:page\-tags\/tag\/(.+)\|(.+)\]\]\]\*\*\(\/\/(.+)\/\/\)\s{0,2}?\-\s{0,2}?(.+)/);
      if (ogg != null) {
        tagsjp.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[4])), ca, ogg[3], i]);
        //        Logger.log(ogg[1]);
      }
      var ogg = text_split[j].match(/\* \*\*\[\[\[\/system:page\-tags\/tag\/(.+)\|(.+)\]\]\]\*\*\/\/\((.+)\)\/\/\s{0,2}?\-\s{0,2}?(.+)/);
      if (ogg != null) {
        tagsjp.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[4])), ca, ogg[3], i]);
        //        Logger.log(ogg[1]);
      }
    }
  }
}

function enparse(text, ret) { /*取得*/
  for (var i = 0; i < text.length; i++) {
    if (text.indexOf("+") != null) {
      var category = text[i].match(/\+\+ (.+)/gm);
      if (category != null) {
        if (category.length == 1) {
          ca = category.toString().split("++ ")[1];
          ret.push(category.toString().split("++ ")[1]);
        }
        if (category.length == 2) {
          ca = category[1].split("++ ")[1];
          ret.push(category[1].split("++ ")[1]);
        }
      }
    }
    var text_split = [];
    text_split = text[i].split("\n");
    for (var j = 0; j < text_split.length; j++) {
      var ogg = text_split[j].match(/\*\*\[http:\/\/scp-wiki.wikidot.com\/system:page\-tags\/tag\/(.+)\s(.+)\]\*\*\s{0,2}?\-\s{0,2}?(.+)/);
      if (ogg != null) {
        if (ogg[1].indexOf("]]]**") == -1) {
          tagsen.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), ca,,i]);
          //        Logger.log(ogg[1]);
        }
      }
      var ogg = text_split[j].match(/\* \[http:\/\/scp-wiki.wikidot.com\/system:page\-tags\/tag\/(.+)\s(.+)\]\s{0,2}?\-\s{0,2}?(.+)/);
      if (ogg != null) {
        tagsen.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), ca,,i]);
        //        Logger.log(ogg[1]);
      }
      var ogg = text_split[j].match(/\* \[http:\/\/scp-wiki.wikidot.com\/system:page\-tags\/tag\/(.+)\s(.+)\]:\s(.+)/);
      if (ogg != null) {
        tagsen.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), ca,,i]);
        //        Logger.log(ogg[1]);
      }
      var ogg = text_split[j].match(/\* \[#\s(.+)\]\s\-\s(.+)/);
      if (ogg != null) {
        tagsen.push([ogg[1].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[2])), ca,,i]);
        //        Logger.log(ogg[1]);
      }
    }
  }
}

function cnparse(text, ret) { /*取得*/
//  for (var i = 0; i < text.length; i++) {
/*    if (text.indexOf("+") != null) {
      var category = text[i].match(/\+\+ (.+)/gm);
      if (category != null) {
        if (category.length == 1) {
          ca = category.toString().split("++ ")[1];
          ret.push(category.toString().split("++ ")[1]);
        }
        if (category.length == 2) {
          ca = category[1].split("++ ")[1];
          ret.push(category[1].split("++ ")[1]);
        }
      }
    }
*/
    var text_split = [];
    text_split = text.split("\n");
    Logger.log(text_split);
    for (var j = 0; j < text_split.length; j++) {
      var ogg = text_split[j].match(/\*\*\[\*\/system:page\-tags\/tag\/(.+)\s(.+)\]\*\*\s{0,2}?\-\s{0,2}?(.+)/);
      // **[*/system:page-tags/tag/需更新 需更新]** - 译文与原文现时的版本不符，需要更新和修订的页面。在译文更新至最新版本后应移除此标签。
      if (ogg != null) {
        if (ogg[1].indexOf("]]]**") == -1) {
          tagscn.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), "", ""]);
          //        Logger.log(ogg[1]);
        }
      }
      var ogg = text_split[j].match(/\*\*\[\*\/system:page\-tags\/tag\/(.+)\s(.+)\]\*\*\s\*\*\/\/\(\[\*http:\/\/.+\/system:page\-tags\/tag\/(.+)\s(.+)\]\)\/\/\*\*\s{0,2}?\-\s{0,2}?(.+)/);
      // * ##38BBD7|（主要标签）##**[*/system:page-tags/tag/scp scp]** **//([*http://www.scp-wiki.net/system:page-tags/tag/scp scp])//** - 所有SCP条目。包括主系列、[[[scp-001|001提案]]]、[[[joke-scps|搞笑]]] (-J)、[[[scp-ex|已解明]]] (-EX)。
      if (ogg != null) {
        tagscn.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[5])), "", ogg[4].trim().toLowerCase()]);
        //        Logger.log(ogg[1]);
      }
      var ogg = text_split[j].match(/\*\*\[\*\/system:page\-tags\/tag\/(.+)\s(.+)\]\*\*\s\*\*\/\/\(\[\*http:\/\/.+\/system:page\-tags\/tag\/(.+)\s(.+)\]\)\*\*\/\/\s{0,2}?\-\s{0,2}?(.+)/);
      // * **[*/system:page-tags/tag/传承-fr 传承-fr]** **//([*http://fondationscp.wikidot.com/system:page-tags/tag/patrimoine-fr patrimoine-fr])**// - [[[patrimoine-francais-de-la-fondation-scp|SCP基金会传承条目合集-FR]]]的作品
      if (ogg != null) {
        tagscn.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), "", ogg[4].trim().toLowerCase()]);
        //        Logger.log(ogg[1]);
      }
      var ogg = text_split[j].match(/\*\*\[\*.+\/system:page\-tags\/tag\/(.+)\s(.+)\]\*\*\s{0,2}?\-\s{0,2}?(.+)/);
      // * **[*http://ja.scp-wiki.net/system:page-tags/tag/scp-jp scp-jp]** - 应改为使用“**scp**”与“**jp**”标签
      if (ogg != null) {
        tagscn.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), "", ""]);
        //        Logger.log(ogg[1]);
      }
      var ogg = text_split[j].match(/\*\*\[\/system:page\-tags\/tag\/(.+)\s(.+)\]\/\/\((.+)\)\/\/\*\*\s{0,2}?\-\s{0,2}?(.+)/);
      // * **[*http://ja.scp-wiki.net/system:page-tags/tag/scp-jp scp-jp]** - 应改为使用“**scp**”与“**jp**”标签
      if (ogg != null) {
        tagscn.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[4])), "", ogg[3].trim().toLowerCase()]);
        //        Logger.log(ogg[1]);
      }
      var ogg = text_split[j].match(/\*\*\[\/system:page\-tags\/tag\/(.+)\s(.+)\]\*\*\s{0,2}?\-\s{0,2}?(.+)/);
      if (ogg != null) {
        tagscn.push([ogg[2].trim().toLowerCase(), trasrateWikidotToHtml(wikidotconvert(ogg[3])), "", ""]);
        //        Logger.log(ogg[1]);
      }
    }
//  }
}




function wikidotconvert(sentence) {
  if (sentence.indexOf("]]]") > -1) {
    if (sentence.indexOf("|") > -1) {
      if (sentence.indexOf("http") > -1) {
        sentence = sentence.replace(/\[\[\[\*?/, '<a target="_blank" href="');
        sentence = sentence.replace(/\|/, '">');
        sentence = sentence.replace(/\]\]\]/, "</a>");
      }
      if (sentence.indexOf("http") == -1) {
        sentence = sentence.replace(/\[\[\[\*?/, '<a target="_blank" href="/');
        sentence = sentence.replace(/\|/, '">');
        sentence = sentence.replace(/\]\]\]/, "</a>");
      }
    }
    if (sentence.indexOf("|") == -1) {
      if (sentence.indexOf("http") > -1) {
        var link_url = sentence.match(/\[\[\[(.+)\]\]\]/);
        var link_title = sentence.match(/\[\[\[.+\/(.+)\]\]\]/);
        if ((link_url != null) && (link_title != null)) {
          sentence = sentence.replace(/\[\[\[\*?/, '<a target="_blank" href="' + link_url[1] + '">');
          sentence = sentence.replace(/\]\]\]/, link_title[1] + "</a>");
        }
      }
      if (sentence.indexOf("http") == -1) {
        var link = sentence.match(/\[\[\[(.+)\]\]\]/);
        if (link != null) {
          sentence = sentence.replace(/\[\[\[\*?/, '<a target="_blank" href="/' + link[1] + '">');
          sentence = sentence.replace(/\]\]\]/, "</a>");
        }
      }
    }
  } else if (sentence.indexOf("footnote") > -1) {
    sentence = sentence.replace(/\[\[footnote\]\].+\[\[\/footnote\]\]/gm, "");
  } else if (sentence.indexOf("]") > -1) {
    var link = sentence.split("]");
    for (var i = 0; i < link.length; i++) {
      if (link[i].indexOf("[") > -1) {
        if (link[i].indexOf("http") > -1) {
          var link_text = link[i].match(/\[.+\/[a-z0-9-:]+\s(.+)/);
        } else {
          var link_text = link[i].match(/\[\/[a-z0-9-:]+\s(.+)/);
        }
        if (link_text != null) {
          //Logger.log(link_text[1]);
          link[i] = link[i].replace(/\[.+$/m, link_text[1]);
        }
      }
    }
    sentence = link.join("");
  }
  return sentence;
}
var wikidotSyntaxList = {
  "**": ["<b>", "</b>", "basic"],
  "--": ["<span style='text-decoration: line-through;'>", "</span>", "basic"],
  "//": ["<em>", "</em>", "basic"],
  "__": ["<span style='text-decoration: underline;'>", "</span>", "basic"],
  "^^": ["<sup>", "</sup>", "basic"],
  ",,": ["<sub>", "</sub>", "basic"],
}

function trasrateWikidotToHtml(sentence) {
  for (var i in wikidotSyntaxList) {
    switch (wikidotSyntaxList[i][2]) {
      case "basic":
        sentence = basicTransrateWikidotToHtml(sentence, i);
        break;
    }
  }

  function setEscapeCode(sentence) {
    var escape = "\\";
    sentence = sentence.replace(/\.|\^|\?|\$|\[|\]|\*|\+|\\|\-|\,/g, function(match) {
      return escape.charAt(0) + match;
    });
    return sentence;
  }

  function basicTransrateWikidotToHtml(sentence, symbol) {
    var symbolEscape = setEscapeCode(symbol);
    var RegBase = symbolEscape + "[^" + symbolEscape + "]*" + symbolEscape;
    var RegAct = new RegExp(RegBase);
    while (sentence.match(RegAct)) {
      sentence = sentence.replace(RegAct, function(match) {
        var ex = match.split(symbol);
        return wikidotSyntaxList[symbol][0] + ex[1] + wikidotSyntaxList[symbol][1];
      });
    }
    return sentence;
  }
  return sentence;
}

function removeDuplicates(name) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  sheet.getRange("A:E").sort({column: 3, ascending: false}).removeDuplicates([1]);//A列の重複を降順で削除
  sheet.getRange("A:E").sort({column: 5, ascending: true});
  sheet.getRange('E1:E').clear();
}
//データ取得
function getDatajp() {
  //コードA1｜スプレッドシートのシート名を取得
  var sheetname = 'JP';
  //コードA2｜スプレッドシートの設定
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  //行（横軸）と列（縦軸）の最大数を取得
  var maxRow = sheet.getLastRow();
  var maxColumn = sheet.getLastColumn();
  //JSON用のkey
  var keys = [];
  //データ格納配列
  var data = [];
  //2行目のkeyの名前取得
  //1行目は管理しやすいよう日本語で記述し、
  //JSON用のラベルは2行目で指定しているため
  //【getRange】の第1引数は【2】
  for (var x = 1; x <= maxColumn; x++) {
    keys.push(sheet.getRange(1, x).getValue());
  }
  //データの取得
  //実際のデータが3行目からなので【y = 3】から開始
  //getRange()を使って、3行目1セル ～ 最終行目の最終セルを範囲指定
  var _values = sheet.getRange(2, 1, maxRow - 1, maxColumn).getValues();
  for (var i = 0; i < _values.length; i++) {
    var json = {};
    for (var k = 0; k < _values[i].length; k++) {
      json[keys[k]] = String(_values[i][k]);
    }
    data.push(json);
  }
  //整形してテキストに
  return JSON.stringify(data, null, 2);
}
//データ取得
function getDataen() {
  //コードA1｜スプレッドシートのシート名を取得
  var sheetname = 'EN';
  //コードA2｜スプレッドシートの設定
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  //行（横軸）と列（縦軸）の最大数を取得
  var maxRow = sheet.getLastRow();
  var maxColumn = sheet.getLastColumn();
  //JSON用のkey
  var keys = [];
  //データ格納配列
  var data = [];
  //2行目のkeyの名前取得
  //1行目は管理しやすいよう日本語で記述し、
  //JSON用のラベルは2行目で指定しているため
  //【getRange】の第1引数は【2】
  for (var x = 1; x <= maxColumn; x++) {
    keys.push(sheet.getRange(1, x).getValue());
  }
  //データの取得
  //実際のデータが3行目からなので【y = 3】から開始
  //getRange()を使って、3行目1セル ～ 最終行目の最終セルを範囲指定
  var _values = sheet.getRange(2, 1, maxRow - 1, maxColumn).getValues();
  for (var i = 0; i < _values.length; i++) {
    var json = {};
    for (var k = 0; k < _values[i].length; k++) {
      json[keys[k]] = String(_values[i][k]);
    }
    data.push(json);
  }
  //整形してテキストに
  return JSON.stringify(data, null, 2);
}
//データ取得
function getDatacn() {
  //コードA1｜スプレッドシートのシート名を取得
  var sheetname = 'CN';
  //コードA2｜スプレッドシートの設定
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  //行（横軸）と列（縦軸）の最大数を取得
  var maxRow = sheet.getLastRow();
  var maxColumn = sheet.getLastColumn();
  //JSON用のkey
  var keys = [];
  //データ格納配列
  var data = [];
  //2行目のkeyの名前取得
  //1行目は管理しやすいよう日本語で記述し、
  //JSON用のラベルは2行目で指定しているため
  //【getRange】の第1引数は【2】
  for (var x = 1; x <= maxColumn; x++) {
    keys.push(sheet.getRange(1, x).getValue());
  }
  //データの取得
  //実際のデータが3行目からなので【y = 3】から開始
  //getRange()を使って、3行目1セル ～ 最終行目の最終セルを範囲指定
  var _values = sheet.getRange(2, 1, maxRow - 1, maxColumn).getValues();
  for (var i = 0; i < _values.length; i++) {
    var json = {};
    for (var k = 0; k < _values[i].length; k++) {
      json[keys[k]] = String(_values[i][k]);
    }
    data.push(json);
  }
  //整形してテキストに
  return JSON.stringify(data, null, 2);
}
// GETリクエスト処理
function doGet(e) {
  //  getdata();
  if (e.parameter.lang === "en") {
    var json = getDataen();
  }
  else if (e.parameter.lang === "cn") {
    var json = getDatacn();
  }
  else {
    var json = getDatajp();
  }
  var res = ContentService.createTextOutput();
  res = res.setMimeType(ContentService.MimeType.JAVASCRIPT);
  res = res.setContent(json);
  Logger.log(res);
  return res
}
