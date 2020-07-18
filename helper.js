const addCommasToString = (nStr) => {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
   return x1 + x2;
  }
  
  const ordinalize = (number) => {
      number += '';
      if(isNaN(number)) return number;
      if(number.length === 1){
          if (number === '1') return number + "st";
          if (number === '2') return number + "nd";
          if (number === '3') return number + "rd";
          if (number != '1'&& number != '2' && number != '3') return number + "th"
      } else {
          secLast = number[number.length - 2];
          lastLast = number[number.length - 1];
          if (secLast === '1') return number + 'th';
          else {
              if (lastLast === '1') return number + "st";
              if (lastLast === '2') return number + "nd";
              if (lastLast === '3') return number + "rd";
              if (lastLast != '1' && lastLast != '2' && lastLast != '3') return number + "th"
          }
      }
  }
  
  const convertTime = function(millisec){
      let seconds = (millisec / 1000).toFixed(0);
      let minutes = Math.floor(seconds / 60);
      let hours = "";
      if (minutes > 59) {
          hours = Math.floor(minutes / 60);
          hours = (hours >= 10) ? hours : "0" + hours;
          minutes = minutes - (hours * 60);
          minutes = (minutes >= 10) ? minutes : "0" + minutes;
      }
      seconds = Math.floor(seconds % 60);
      seconds = (seconds >= 10) ? seconds : "0" + seconds;
      if (hours != "") {
          return hours + "h:" + minutes + "m:" + seconds + "s";
      }
      return minutes + "m:" + seconds + "s";
  }
  
  const textTrunctuate = function(str, length, ending) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = '...';
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };
  
  const timeZoneConvert = function(data){
    var months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let date1 = new Date(data)
      let date = date1.getDate();
      let year = date1.getFullYear();
      let month = months[date1.getMonth() + 1];
      let h = date1.getHours();
      let m = date1.getMinutes();
      let ampm = "AM";
      if(m < 10) {
          m = "0" + m;
      }
      if(h > 12) {
          h = h - 12;
      }
      return month + " " + date + ", " + year + " " + h + ":" + m + " " + ampm;
  }
  
  const commatize = function(nStr){
     nStr += '';
     var x = nStr.split('.');
     var x1 = x[0];
     var x2 = x.length > 1 ? '.' + x[1] : '';
     var rgx = /(\d+)(\d{3})/;
     while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
     }
     return x1 + x2;
  }
  
  function roundTo(n, digits) {
      var negative = false;
      if (digits === undefined) {
          digits = 0;
      }
          if( n < 0) {
          negative = true;
        n = n * -1;
      }
      var multiplicator = Math.pow(10, digits);
      n = parseFloat((n * multiplicator).toFixed(11));
      n = (Math.round(n) / multiplicator).toFixed(2);
      if( negative ) {
          n = (n * -1).toFixed(2);
      }
      return n;
  }
  
  function fromNow(date) {
      if (!date) {
          return false;
      }
  
      const ms = new Date().getTime() - date.getTime();
  
      if (ms >= 86400000) {
          const days = Math.floor(ms / 86400000);
          return `${days} day${days !== 1 ? 's' : ''} ago`;
      }
  
      return `${humanizeDuration(ms, 1, false, false)} ago`;
  }
  
  function humanizeDuration(ms, maxUnits, short = false, fraction = true) {
      const round = ms > 0 ? Math.floor : Math.ceil
      const parsed = [{
              int: round(ms / 604800000),
              sin: 'week',
              plu: 'weeks',
              sho: 'w'
          },
          {
              int: round(ms / 86400000) % 7,
              sin: 'day',
              plu: 'days',
              sho: 'd'
          },
          {
              int: round(ms / 3600000) % 24,
              sin: 'hour',
              plu: 'hours',
              sho: 'h'
          },
          {
              int: round(ms / 60000) % 60,
              sin: 'minute',
              plu: 'minutes',
              sho: 'm'
          },
          {
              int: (round(ms / 1000) % 60) + (round(ms) % 1000 / 1000),
              sin: 'second',
              plu: 'seconds',
              sho: 's'
          }
      ]
  
      const result = []
      for (let i = 0; i < parsed.length; i++) {
          if (!result.length && parsed[i].int === 0) {
              continue
          }
  
          if (result.length >= maxUnits) {
              break
          }
  
          let int = parsed[i].int
          if (!result.length && fraction && i === parsed.length - 1) {
              int = int.toFixed(1)
          } else {
              int = int.toFixed(0)
          }
  
          result.push(`${int}${short ? parsed[i].sho : ' ' + (parseFloat(int) !== 1 ? parsed[i].plu : parsed[i].sin)}`)
      }
  
      return result.map((res, i) => {
          if (!short) {
              if (i === result.length - 2) {
                  return res + ' and'
              } else if (i !== result.length - 1) {
                  return res + ','
              }
          }
          return res
      }).join(' ')
  }
  
  function addBlankSpace(num){
    if (!num) return ''
  
    num = Number(num)
    if (isNaN(num)) return ''
  
    if (num < 1) return '\u200B'
  
    str = "\u200B"
  
    for (let x = 0; x < num; x++){
      str += "\u2000"
    }
  
    return str
   }

   arrayColors = 
      [
        "62d3f5", // Soft cyan
        "45ddc0", // Soft cyan
        "96F5F5", // Very soft cyan
        "1ABC9C", // Strong cyan
        "11806A", // Dark cyan
        "95A5A6", // Dark grayish cyan
        "00c3e3", // Pure cyan
        "43B581", // Moderate cyan
        "60C1D4", // Moderate cyan
        "2E7456", // Dark moderate cyan
        "2ECC71", // lime green
        "82FF96", // Very light lime green
        "3fff33", // Vivid lime green
        "1F8B4C", // Dark lime green
        "1EDC00", // Pure (or mostly pure) lime green
        "3498DB", // Bright blue
        "4086EC", // Bright blue
        "206694", // dark blue
        "647096", // Mostly desaturated dark blue
        "AABFF2", // Very soft blue
        "CBDAF7", // Light grayish blue
        "818386", // Dark grayish blue
        "979C9F", // Dark grayish blue
        "232327", // Very dark (mostly black) blue
        "7289da", // Soft blue
        "9c84ef", // Very soft blue
        "3E70DD", // Bright blue
        "B7C2CE", // Grayish blue
        "9B59B6", // Moderate violet
        "71368A", // Dark moderate violet
        "8427fa", // Bright violet
        "F1C40F", // Vivid yellow
        "FFDD00", // Pure (or mostly pure) yellow
        "ff8633", // Vivid orange
        "A84300", // Dark orange [Brown tone]
        "D7AA73", // Slightly desaturated orange
        "C88D32", // Strong orange
        "FBB848", // Bright orange
        "FC964B", // Bright orange
        "e74c3c", // Bright red
        "992D22", // Dark red
        "f47b67", // Soft red
        "ff4554", // Light red
        "E10F00", // Pure (or mostly pure) red
        "ff3278", // Vivid pink
        "f5a9f2", // Very soft magenta
        "F96DF6", // Soft magenta
        "FFACFA", // Pale magenta
        "241395", // TeamColor_Cop_Blue
        "1410f", // TeamColor_Cop_Blue	
        "e1f019", // TeamColor_Cop_Blue
        "8318c5", // TeamColor_Cop_Option_Blue	
        "aa410f", // TeamColor_Cop_Orange
        "a81b88", // TeamColor_Cop_Pink	
        "4922c4", // TeamColor_Msn_Blue	
        "b80097", // TeamColor_Msn_Blue	
        "e3bc18", // TeamColor_Msn_Blue	
        "bbf0e", // TeamColor_Msn_Green	
        "b800a7", // TeamColor_Msn_Green	
        "100c900", // TeamColor_Msn_Green	
        "ac8ef6", // TeamColor_Msn_Lavender	
        "d1aa07", // TeamColor_Msn_Lavender
        "b0dd06", // TeamColor_Msn_LumiGreen	
        "5408eb", // TeamColor_Msn_LumiGreen	
        "ee9705", // TeamColor_Msn_Marigold
        "3a05f", // TeamColor_Msn_Marigold
        "19991e", // TeamColor_Msn_NightLumiGreen
        "4400c9", // TeamColor_Msn_NightLumiGreen
        "f0504b", // TeamColor_Msn_Oct_Coral
        "aad46", // TeamColor_Msn_Oct_Coral
        "1005c47", // TeamColor_Msn_Oct_Orange	
        "8a33d6", // TeamColor_Msn_Oct_Purple	
        "f74479", // TeamColor_Msn_Pink
        "8e39fb", // TeamColor_Msn_Purple
        "75daa7", // TeamColor_Msn_Soda	
        "8be7a", // TeamColor_Msn_Turquoise	
        "ba3565", // TeamColor_Vss_Fest_SameTeam_PurpleTurquoise	
        "10814e", // TeamColor_Vss_Fest_SameTeam_PurpleTurquoise	
        "58199a", // TeamColor_Vss_Fest_SameTeam_PurpleTurquoise	
        "4e10bc", // TeamColor_Vss_Fest_Option_PurpleGreen	
        "b72e6f", // TeamColor_Vss_Fest_SameTeam_PinkBlue	
        "38249c", // TeamColor_Vss_Fest_SameTeam_PinkBlue	
        "d208d3", // Unknown
        "22b11", // Unknown
        "a340d", // Unknown
        "2402", // Unknown
        "20002", // Unknown
        "6B49B5", // つぶあん/こしあん	
        "C64D7B", // つぶあん/こしあん	
        "DE71A5", // ウサギ/カメ	
        "A5D331", // ウサギ/カメ	
        "2934D6", // 飛行/透明	
        "42D339", // 飛行/透明	
        "CEAA31", // パンケーキ/ワッフル	
        "8449CE", // パンケーキ/ワッフル	
        "EF864A", // フォーク/スプーン	
        "52C79C", // フォーク/スプーン	
        "94CBB5", // 塩味/甘味	
        "CE9A42", // 塩味/甘味
        "DE4D31", // 野球/サッカー	
        "10CB42", // 野球/サッカー
        "6B20C6", // ピクルス抜き/入り	
        "6BBA21", // ピクルス抜き/入り	
        "EFE7CE", // ニワトリ/たまご	
        "E7B621", // ニワトリ/たまご	
        "2934D6", // 瞬発力/持久力	
        "42D339", // 瞬発力/持久力	
        "E77994", // 花/団子	
        "6BCB73", // 花/団子	
        "29D39C", // 最新/人気	
        "CEEB18", // 最新/人気	
        "DED718", // きのこの山/たけのこの里	
        "428E08", // きのこの山/たけのこの里	
        "A5E321", // レモンかける/かけない	
        "9430BD", // レモンかける/かけない	
        "F78252", // 朝食あたたかい/つめたい	
        "52C7BD", // 朝食あたたかい/つめたい	
        "EF1842", // ヒーロー/ヴィラン	
        "181CB5", // ヒーロー/ヴィラン	
        "D6C721", // 冒険/リラックス	
        "21A673", // 冒険/リラックス	
        "DE0831", // ポッキー/ポッキー<極細>	
        "CEBECE", // ポッキー/ポッキー<極細>	
        "E7CFB5", // ハローキティ/シナモロール	
        "29AEBD", // ハローキティ/シナモロール	
        "DE7DA5", // トイレットペーパー表/裏	
        "39B2BD", // トイレットペーパー表/裏	
        "E7D763", // マヨ/ケチャ	
        "EF1431", // マヨ/ケチャ	
        "E9386B", // マイメロディ/ポムポムプリン	
        "E7CF31", // マイメロディ/ポムポムプリン	
        "298AB5", // SF/ファンタジー	
        "73C339", // SF/ファンタジー	
        "C61021", // ニンジャレッド/ニンジャブルー	
        "2128CE", // ニンジャレッド/ニンジャブルー	
        "D6AA21", // お金/愛	
        "E7306B", // お金/愛	
        "31D78C", // 子供/大人	
        "524531", // 子供/大人	
        "7d5c26", // 家族/仲間	
        "82878f", // 家族/仲間	
        "5A24A5", // 映画/本	
        "31C78C", // 映画/本	
        "B55118", // レトロ/モダン	
        "9C9E94", // レトロ/モダン	
        "D638AD", // ロック/ポップ	
        "21CF8C", // ロック/ポップ	
        "DE284A", // 好きなもの最初に食べる/最後に食べる	
        "C6B68C", // 好きなもの最初に食べる/最後に食べる	
        "9C0C29", // サルサ/ワカモレ	
        "5A8631", // サルサ/ワカモレ	
        "E7CF18", // ニンジャオレンジ/ニンジャパープル	
        "7B20AD", // ニンジャオレンジ/ニンジャパープル	
        "108231", // セ・リーグ/パ・リーグ	
        "21A2B5", // セ・リーグ/パ・リーグ	
        "D638AD", // ケーキ/アイス	
        "21CF8C", // ケーキ/アイス
        "D67910", // 果粒入り/なし	
        "21AA10", // 果粒入り/なし	
        "DEB229", // パインなし/あり	
        "634521", // パインなし/あり	
        "E72031", // マックフライポテト/チキンマックナゲット	
        "4A30DE", // マックフライポテト/チキンマックナゲット	
        "E77921", // インナー/アウター	
        "5A5963", // インナー/アウター	
        "EF9AD6", // ユニコーン/イッカク	
        "94AEEF", // ユニコーン/イッカク	
        "EFB610", // アクション/コメディ	
        "218AC6", // アクション/コメディ	
        "F7D721", // 王者/挑戦者	
        "4228DE", // 王者/挑戦者	
        "DE5508", // 未知の生物/先進の技術	
        "3118AD", // 未知の生物/先進の技術	
        "EF5129", // ボケ/ツッコミ	
        "18C7B5", // ボケ/ツッコミ	
        "BD1842", // セーター/ソックス	
        "188618", // セーター/ソックス	
        "8428AD", // トリック/トリート	
        "C66D29", // トリック/トリート	
        "42E308", // 吸血鬼/狼人間	
        "DE28A5", // 吸血鬼/狼人間	
        "736D63", // イカ/タコ	
        "AD1C52", // イカ/タコ	
        "BD8A4A", // 騎士/魔法使い	
        "1845DE", // 騎士/魔法使い	
        "826b2e", // 混沌/秩序	
        "787a8f" //  混沌/秩序	
      ]
      function RandomColorGenerator() 
{
    var colorPlaceHolder = "";
      var arrayColorSelector = arrayColors[Math.floor(Math.random() * arrayColors.length)] 
      colorPlaceHolder = arrayColorSelector
    return colorPlaceHolder;
}

  
  module.exports = {
    addCommasToString,
    ordinalize,
    convertTime,
    textTrunctuate,
    timeZoneConvert,
    commatize,
    roundTo,
    fromNow,
    humanizeDuration,
    addBlankSpace,
    RandomColorGenerator
  }