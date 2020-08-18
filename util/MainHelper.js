const timeZoneConvert = function(data) {
  var months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let date1 = new Date(data);
  let date = date1.getDate();
  let year = date1.getFullYear();
  let month = months[date1.getMonth() + 1];
  let h = date1.getHours();
  let m = date1.getMinutes();
  let ampm = "AM";
  if (m < 10) {
    m = "0" + m;
  }
  if (h > 12) {
    h = h - 12;
  }
  return month + " " + date + ", " + year + " " + h + ":" + m + " " + ampm;
};

const commatize = function(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
};

function roundTo(n, digits) {
  var negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(2);
  if (negative) {
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
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }

  return `${humanizeDuration(ms, 1, false, false)} ago`;
}

function humanizeDuration(ms, maxUnits, short = false, fraction = true) {
  const round = ms > 0 ? Math.floor : Math.ceil;
  const parsed = [
    {
      int: round(ms / 604800000),
      sin: "week",
      plu: "weeks",
      sho: "w"
    },
    {
      int: round(ms / 86400000) % 7,
      sin: "day",
      plu: "days",
      sho: "d"
    },
    {
      int: round(ms / 3600000) % 24,
      sin: "hour",
      plu: "hours",
      sho: "h"
    },
    {
      int: round(ms / 60000) % 60,
      sin: "minute",
      plu: "minutes",
      sho: "m"
    },
    {
      int: (round(ms / 1000) % 60) + (round(ms) % 1000) / 1000,
      sin: "second",
      plu: "seconds",
      sho: "s"
    }
  ];

  const result = [];
  for (let i = 0; i < parsed.length; i++) {
    if (!result.length && parsed[i].int === 0) {
      continue;
    }

    if (result.length >= maxUnits) {
      break;
    }

    let int = parsed[i].int;
    if (!result.length && fraction && i === parsed.length - 1) {
      int = int.toFixed(1);
    } else {
      int = int.toFixed(0);
    }

    result.push(
      `${int}${
        short
          ? parsed[i].sho
          : " " + (parseFloat(int) !== 1 ? parsed[i].plu : parsed[i].sin)
      }`
    );
  }

  return result
    .map((res, i) => {
      if (!short) {
        if (i === result.length - 2) {
          return res + " and";
        } else if (i !== result.length - 1) {
          return res + ",";
        }
      }
      return res;
    })
    .join(" ");
}

function addBlankSpace(num) {
  if (!num) return "";

  num = Number(num);
  if (isNaN(num)) return "";

  if (num < 1) return "\u200B";

  str = "\u200B";

  for (let x = 0; x < num; x++) {
    str += "\u2000";
  }

  return str;
}

module.exports = {
  timeZoneConvert,
  commatize,
  roundTo,
  fromNow,
  humanizeDuration,
  addBlankSpace
};
