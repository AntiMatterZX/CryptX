var mcp = { "url": "https://www.cryptohopper.com/widgets", "ajax_url": "https://www.cryptohopper.com/widgets/widgets/ajax", "numformat": "US" };
this.depp || function (f, u) {
    depp = function () {
        function a(l, d) { var q = function t(n, v) { v = v || []; var x = [], z = []; return n.forEach(function (A) { if (0 <= v.indexOf(A)) throw Error("Depp Error: Circular reference"); if (!(A in b)) return x.push("#" + A); b[A].forEach(function (B) { if ("#" == B[0]) { var y = v.slice(); y.push(A); y = t([B.slice(1)], y); x = x.concat(y[0]); z = z.concat(y[1]) } else z.push(B) }) }), [x, z] }(l); q[0].length ? c(q[0], function () { a(l, d) }) : d(q[1]) } function c(l, d) {
            var q, w, n = l.length, v = n; if (0 == n) return d(); for (q = function (t, x) {
                if (x) return d(t);
                --v || d()
            }; n--;)(w = l[n]) in h ? q(w, h[w]) : (m[w] = m[w] || []).push(q)
        } function g(l, d) { var q = m[l]; if (h[l] = d, q) for (; q.length;)q[0](l, d), q.splice(0, 1) } var e = {}, k = function () { }, b = {}, m = {}, h = {}, r = {}, p = {}; return e.define = function (l) { var d; for (d in l) { if (d in b) throw Error("Depp Error: Bundle already defined"); var q = l[d]; b[d] = q.push ? q : [q]; g("#" + d) } }, e.config = function (l) { for (var d in l) p[d] = l[d] }, e.require = function (l, d, q) {
            a(l = l.push ? l : [l], function (w) {
                c(w, function (n) { n ? (q || k)(n) : (d || k)() }); w.forEach(function (n) {
                    var v,
                        t, x, z, A; n in r || (r[n] = !0, x = document, z = p.before || k, A = n.replace(/^(css|img)!/, ""), /(^css!|\.css$)/.test(n) ? (v = !0, (t = x.createElement("link")).rel = "stylesheet", t.href = A) : /(^img!|\.(png|gif|jpg|svg)$)/.test(n) ? (t = x.createElement("img")).src = A : ((t = x.createElement("script")).src = n, t.async = !1), t.onload = t.onerror = t.onbeforeload = function (B) { var y = B.type[0]; if (v && "hideFocus" in t) try { t.sheet.cssText.length || (y = "e") } catch (C) { 18 != C.code && (y = "e") } if ("b" == y) { if (!B.defaultPrevented) return; y = "e" } g(n, "e" == y) }, z(n, t),
                            x.head.appendChild(t))
                })
            })
        }, e.done = function (l) { b[l] = []; g("#" + l) }, e.isDefined = function (l) { return l in b }, e.reset = function () { b = {}; m = {}; h = {}; r = {}; p = {} }, e
    }(); (u = f.createEvent("HTMLEvents")).initEvent ? u.initEvent("depp-load", !1, !1) : u = new Event("depp-load"); f.dispatchEvent(u)
}(document); function addCommas(f) { var u = "US" === mcp.numformat ? "." : ",", a = "US" === mcp.numformat ? "," : ".", c = (f + "").split("."); f = c[0]; u = 1 < c.length ? u + c[1] : ""; for (c = /(\d+)(\d{3})/; c.test(f);)f = f.replace(c, "$1" + a + "$2"); return f + u }
function hex2rgb(f) { f = f.replace("#", ""); 3 === f.length && (f = f[0] + f[0] + f[1] + f[1] + f[2] + f[2]); var u = parseInt(f.substring(0, 2), 16), a = parseInt(f.substring(2, 4), 16); f = parseInt(f.substring(4, 6), 16); return isNaN(u) || isNaN(a) || isNaN(f) ? Error("Invalid Hex") : u + "," + a + "," + f }
function commarize(f, u) { "1" == u ? formats = [" T", " B", " M", " K"] : "2" == u && (formats = [" Trillion", " Billion", " Million", "Thousand"]); return "3" != u ? 1E15 <= Math.abs(Number(f).toFixed(2)) ? (Math.abs(Number(f)) / 1E12).toFixed(2) + formats[0] : 1E9 <= Math.abs(Number(f)) ? (Math.abs(Number(f)) / 1E9).toFixed(2) + formats[1] : 1E6 <= Math.abs(Number(f)) ? (Math.abs(Number(f)) / 1E6).toFixed(2) + formats[2] : 1E3 <= Math.abs(Number(f)) ? (Math.abs(Number(f)) / 1E3).toFixed(2) + formats[3] : addCommas(Math.abs(Number(f))) : addCommas(Math.abs(Number(f)).toFixed(0)) }
function rgb2hex(f) { return (f = f.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === f.length ? "#" + ("0" + parseInt(f[1], 10).toString(16)).slice(-2) + ("0" + parseInt(f[2], 10).toString(16)).slice(-2) + ("0" + parseInt(f[3], 10).toString(16)).slice(-2) : "" } function isBrightness(f) { var u = rgb2hex(f.css("background-color")); u = parseInt(u.substring(1), 16); 50 > .2126 * (u >> 16 & 255) + .7152 * (u >> 8 & 255) + .0722 * (u >> 0 & 255) && f.addClass("invert-act") }
function realtimeUpdate() { var f = jQuery('[data-realtime="on"]'); if ("undefined" === typeof window.socket && 0 < f.length) { var u = []; f.find("[data-live-price]").each(function () { u.push(jQuery(this).data("live-price")) }); u = u.filter(function (a, c) { return u.indexOf(a) == c }); u.length && (window.socket = new WebSocket("wss://ws.coincap.io/prices?assets=" + u.join(",")), window.socket.addEventListener("message", function (a) { tradeMsg = JSON.parse(a.data); for (var c in tradeMsg) f.find('[data-live-price="' + c + '"]').each(function () { jQuery(this).realTime(tradeMsg[c]) }) })) } }
var domain = "static.cryptohopper.com";
depp.define({
    jquery: ["https://" + domain + "/widgets/assets/public/js/jquery-3.3.1.min.js"], css: ["https://" + domain + "/widgets/assets/public/css/style.css"], chartjs: ["https://" + domain + "/widgets/assets/public/js/Chart.min.js"], datatable: ["https://" + domain + "/widgets/assets/public/css/jquery.dataTables.min.css", "https://static.cryptohopper.com/widgets/assets/public/js/jquery.dataTables.min.js", "https://static.cryptohopper.com/widgets/assets/public/js/dataTables.responsive.min.js"], echarts: ["https://" + domain +
        "/widgets/assets/public/js/Charts.min.js"], bounty: ["https://" + domain + "/widgets/assets/public/js/bounty.min.js"], visibilitychanged: ["https://" + domain + "/widgets/assets/public/js/jquery.visibilitychanged.min.js"], selectize: ["https://" + domain + "/widgets/assets/public/js/selectize.min.js"]
}); window.jQuery && depp.done("jquery");
depp.require(["jquery", "css"], function () {
    realtimeUpdate(); jQuery.fn.imagesLoaded = function () { var a = this.find('img[src!=""]'); if (!a.length) return jQuery.Deferred().resolve().promise(); var c = []; a.each(function () { var g = jQuery.Deferred(); c.push(g); var e = new Image; e.onload = function () { g.resolve() }; e.onerror = function () { g.resolve() }; e.src = this.src }); return jQuery.when.apply(jQuery, c) }; jQuery.fn.extend({
        animateCss: function (a, c) {
            var g = function (e) {
                var k = {
                    animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd",
                    WebkitAnimation: "webkitAnimationEnd"
                }, b; for (b in k) if (void 0 !== e.style[b]) return k[b]
            }(document.createElement("div")); this.addClass("mcw-animated " + a).one(g, function () { jQuery(this).removeClass("mcw-animated " + a); "function" === typeof c && c() }); return this
        }
    }); jQuery.fn.realTime = function (a) {
        var c = parseFloat(jQuery(this).data("rate") * a), g = 1 <= c ? 2 : 1E-6 > c ? 8 : 6; jQuery(this).find("span").html(addCommas(c.toFixed(g))); a > parseFloat(jQuery(this).attr("data-price")) && jQuery(this).animateCss("liveup"); a < parseFloat(jQuery(this).attr("data-price")) &&
            jQuery(this).animateCss("livedown"); jQuery(this).attr("data-price", a)
    }; jQuery.fn.invertable = function () {
        isBrightness(jQuery(this)); var a = "ethereum ripple iota eos 0x bancor dentacoin bibox-token medishares santiment quantstamp raiden-network-token pillar republic-protocol metal eidoo credo blackmoon covesting shivom suncontract numeraire daostack bitdegree matryx faceter internxt cryptoping invacio chainium creativecoin trezarcoin elcoin-el jesus-coin mojocoin gapcoin prime-xi speedcash veltor loopring-neo francs".split(" ");
        jQuery(this).find("img").each(function () { -1 < a.join("-").toLowerCase().indexOf(jQuery(this).attr("alt").toLowerCase()) && jQuery(this).addClass("invertable") })
    }; jQuery(".mcw-dark-theme,.mcw-midnight-theme,.mcw-custom-theme,.mcw-table.dark").each(function () { jQuery(this).invertable() }); jQuery.fn.inView = function () { var a = jQuery(window); obj = jQuery(this); var c = a.scrollTop(); a = a.scrollTop() + a.height(); var g = obj.offset().top + obj.outerHeight(); return a >= g && c <= g ? !0 : !1 }; jQuery.fn.drawChart = function () {
        var a = jQuery(this);
        depp.require("chartjs", function () {
            var c = a.data("rate") ? a.data("rate") : 1, g = a.data("fiat") ? a.data("fiat") : "$", e = a.data("color"), k = parseInt(a.data("gradient")), b = parseInt(a.data("border")), m = parseFloat(a.data("opacity")), h = a.data("points").split(",").slice(0, 24); h = h.map(function (p) { p = parseFloat(p) * c; return p.toFixed(1 <= p ? 2 : 1E-6 > p ? 8 : 6) }); r = r ? r : e; if (0 === k) var r = "rgba(" + e + "," + m + ")"; else r = a[0].getContext("2d").createLinearGradient(0, 0, 0, k), r.addColorStop(0, "rgba(" + e + ",0.3)"), r.addColorStop(1, "rgba(" + e +
                ",0)"); e = { labels: h, datasets: [{ data: h, fill: !0, backgroundColor: r, borderColor: "rgb(" + e + ")", pointBorderColor: "rgb(" + e + ")", lineTension: .25, pointRadius: 0, borderWidth: b }] }; new Chart(a[0].getContext("2d"), {
                    type: "line", data: e, options: {
                        animation: { duration: 500 }, legend: { display: !1 }, scales: { xAxes: [{ display: !1 }], yAxes: [{ display: !1 }] }, tooltips: { mode: "index", intersect: !1, displayColors: !1, callbacks: { label: function (p, l) { return g + " " + addCommas(parseFloat(p.xLabel)) }, title: function (p, l) { return !1 } } }, hover: {
                            mode: "nearest",
                            intersect: !0
                        }, maintainAspectRatio: !1
                    }
                })
        })
    }; jQuery.fn.mcwAccordion = function () { this.find(".mcw-list-item:eq(0)").addClass("active").find(".mcw-list-body").slideDown(); this.find(".mcw-list-header").click(function () { jQuery(this).parents(".mcw-list").find(".mcw-list-item").not(jQuery(this).parent()).removeClass("active").find(".mcw-list-body").slideUp(); jQuery(this).parent().toggleClass("active"); jQuery(this).next(".mcw-list-body").slideToggle() }) }; jQuery(document).on("mcw", ".mcw-table", function () {
        var a =
            jQuery(this), c = a.find(".mcw-datatable"); depp.require("datatable", function () {
                jQuery.fn.dataTableExt.oPagination.info_buttons = {
                    fnInit: function (b, m, h) {
                        var r = b._iDisplayStart + 1 + " - " + b.fnDisplayEnd() + " of " + b.fnRecordsDisplay(), p = document.createElement("span"), l = document.createElement("span"), d = document.createElement("span"); p.appendChild(document.createTextNode(b.oLanguage.oPaginate.sPrevious)); d.appendChild(document.createTextNode(b.oLanguage.oPaginate.sNext)); l.appendChild(document.createTextNode(r));
                        p.className = "paginate_button previous"; d.className = "paginate_button next"; l.className = "paginate_button info"; m.appendChild(p); m.appendChild(l); m.appendChild(d); jQuery(p).click(function () { b.oApi._fnPageChange(b, "previous"); h(b) }); jQuery(d).click(function () { b.oApi._fnPageChange(b, "next"); h(b) }); jQuery(p).bind("selectstart", function () { return !1 }); jQuery(d).bind("selectstart", function () { return !1 })
                    }, fnUpdate: function (b, m) {
                        if (b.aanFeatures.p) for (var h = b.aanFeatures.p, r = 0, p = h.length; r < p; r++) {
                            var l = h[r].getElementsByTagName("span");
                            l[1].innerText = b._iDisplayStart + 1 + " - " + b.fnDisplayEnd() + " of " + b.fnRecordsDisplay(); 0 === b._iDisplayStart ? l[0].className = "paginate_button previous disabled" : l[0].className = "paginate_button previous enabled"; b.fnDisplayEnd() == b.fnRecordsDisplay() ? l[2].className = "paginate_button next disabled" : l[2].className = "paginate_button next enabled"
                        }
                    }
                }; var g = [], e = []; c.find("thead th").each(function (b) {
                    var m = jQuery(this).data("col"); e.push(m); g.push({
                        data: m, name: m, render: function (h, r, p, l) {
                            if (void 0 === l.settings.json) return h;
                            switch (m) {
                                case "rank": return h; case "name": return r = '<div class="coin"><div class="coin-image"><img src="' + p.img + '" style="max-height: 25px;" alt="' + p.slug + '"></div>', r = p.link ? r + ('<a href="' + p.link + '" class="coin-title"><div class="coin-name">' + h + '</div><div class="coin-symbol">' + p.symbol + "</div></a>") : r + ('<div class="coin-title"><div class="coin-name">' + h + '</div><div class="coin-symbol">' + p.symbol + "</div></div>"), r + "</div>"; case "price_usd": r = parseFloat(p.currate * h); l = 1 <= r ? 2 : 1E-6 > r ? 8 : 6; var d = p.name.split(" ").join("-");
                                    d = d.toLowerCase(); return '<span data-live-price="' + d + '" data-rate="' + p.currate + '" data-price="' + h + '">' + p.cryptofiat + " " + addCommas(r.toFixed(l)) + "</span>"; case "price_btc": return "\u0243 " + h; case "market_cap_usd": return h *= p.currate, p.cryptofiat + " " + commarize(h, p.priceformat); case "volume_usd_24h": return h *= p.currate, h = commarize(h, p.priceformat), p.cryptofiat + " " + h; case "available_supply": return commarize(h, p.priceformat); case "percent_change_24h": return '<span class="' + (0 <= h ? "up" : "down") + '">' + h + "%</span>";
                                case "weekly": return '<td><canvas width="135" height="30" data-rate="' + p.currate + '" data-fiat="' + p.cryptofiat + '" data-color="' + c.data("chartcolor") + '" data-gradient="50" data-border="2" data-points="' + h.join(",") + '"></canvas></td>'; default: return h
                            }
                        }
                    })
                }); var k = c.DataTable({
                    destroy: !0, bDestroy: !0, dom: 'r<"loader"><"datatable-scroll"t><"loader"><"dataTables-footer"lp><"clear">', order: [], scrollCollapse: !0, pagingType: "info_buttons", responsive: { details: { type: 480 > a.width() ? "column" : "inline", target: "tr" } },
                    pageLength: parseInt(c.data("length")), lengthMenu: [parseInt(c.data("length")), 10, 25, 50, 100].sort(function (b, m) { return b - m }).filter(function (b, m, h) { return h.indexOf(b) === m }), columns: g, processing: !0, serverSide: !0, deferLoading: parseInt(c.data("total")), columnDefs: [{ targets: "col-name", className: "ctrl text-left all" }, { targets: "col-rank", className: "text-left min-tablet-p", width: "20px" }, { targets: "col-price_usd", className: "all" }, { targets: "col-weekly", width: "190px", "max-width": "190px", className: "chart-wrapper" }],
                    drawCallback: function (b) { c.find("canvas").each(function () { jQuery(this).drawChart() }); b = c.parents(".cryptoboxes").data("realtime"); "undefined" !== typeof window.socket && "on" === b && window.socket.addEventListener("message", function (m) { var h = JSON.parse(m.data); c.find('[data-live-price="' + h.base + '"]').each(function () { jQuery(this).realTime(h) }) }); jQuery(".mcw-table.dark").each(function () { jQuery(this).invertable() }) }, ajax: { url: mcp.ajax_url, data: { action: "mcw_table", dynamic: a.attr("data-dynamic"), mcw_id: a.attr("id").split("-")[1] } },
                    language: { processing: "", lengthMenu: "Coins per page: _MENU_" }
                }); k.on("responsive-resize", function (b, m, h) { var r = h[0] ? 0 : 1; c.find("tr td").removeClass("ctrl"); c.find("tbody tr").each(function () { jQuery(this).find("td").eq(r).addClass("ctrl") }); c.removeClass("dtr-column dtr-inline"); c.addClass(["dtr-inline", "dtr-column"][r]) }); k.on("processing.dt", function (b, m, h) { h ? (b = a.find("thead").inView() ? 0 : 1, a.find(".loader").eq(b).show()) : a.find(".loader").hide() }); k.on("responsive-display", function (b) {
                    jQuery(b.currentTarget).find("td.child canvas").parent().addClass("chart-wrapper");
                    jQuery(b.currentTarget).find("td.child canvas").each(function () { jQuery(this).drawChart() })
                })
            })
    }); jQuery(document).on("mcw", ".mcw-chart", function () {
        var a = jQuery(this); depp.require(["echarts", "visibilitychanged"], function () {
            function c(d) { b.period = d; k.title.subtext = r[b.period]; e() } function g(d) {
                b.coin = "MIOTA" == b.coin ? "IOT" : b.coin; var q = "https://min-api.cryptocompare.com/data/" + ("day" === b.period || "week" === b.period ? "histohour" : "histoday"); q += "?fsym=" + b.coin + "&tsym=" + b.currency; q += "&limit=" + h[b.period] +
                    "&aggregate=1&extraParams=massivecrypto"; var w = "mcw-" + b.coin.toLowerCase() + "-" + b.currency.toLowerCase() + "-" + b.period; if (null === sessionStorage.getItem(w) || "" == sessionStorage.getItem(w)) jQuery.get(q, function (n) { sessionStorage.setItem(w, JSON.stringify(n)); return d(n) }, "json"); else return q = JSON.parse(sessionStorage.getItem(w)), d(q)
            } function e() {
                l.showLoading("default", { text: "", color: m.titleColor, maskColor: m.backgroundColor }); g(function (d) {
                    var q = [], w = [], n = []; for (i = 0; i < d.Data.length; i++) {
                        var v = new Date(1E3 *
                            d.Data[i].time); if ("day" == b.period) { var t = p[v.getMonth()] + " "; var x = v; v = x.getHours(); x = x.getMinutes(); var z = 12 <= v ? "PM" : "AM"; v %= 12; t += (v ? v : 12) + ":" + (10 > x ? "0" + x : x) + " " + z } else t = p[v.getMonth()] + " " + v.getDate(); v = t; t = "chart" == b.type ? d.Data[i].close : [d.Data[i].close, d.Data[i].open, d.Data[i].low, d.Data[i].high]; q.push(v); w.push(t); n.push(d.Data[i].volumefrom)
                    } k.xAxis[0].data = q; k.series[0].data = w; "candlestick" == b.type && (d = Math.round(h[b.period] / 60 * 10), q = "candlestick" == b.type && 10 < d ? !0 : !1, k.dataZoom.show = q,
                        k.dataZoom.start = d, k.grid.y2 = q ? 80 : 40, k.series[1].data = n); l.setOption(k); l.hideLoading()
                })
            } var k = { type: a.attr("data-charttype"), coin: a.attr("data-chartcoin"), currency: a.attr("data-chartcurrency"), symbol: a.attr("data-chartsymbol"), period: a.attr("data-chartview"), theme: a.attr("data-charttheme"), smooth: "true" == a.attr("data-chartsmooth"), textColor: a.attr("data-chartareacolor"), areaColor: a.attr("data-chartbgcolor"), font: a.attr("data-font"), config: JSON.parse(a.attr("data-config")) }; setInterval(function () {
                if (0 <
                    sessionStorage.length) for (var d = 0; d < sessionStorage.length; d++)-1 < sessionStorage.key(d).indexOf("mcw-") && sessionStorage.setItem(sessionStorage.key(d), "")
            }, 18E5); var b = jQuery.extend({ type: "chart", coin: "BTC", currency: "USD", symbol: "$", period: "day", theme: "dark", smooth: !0, areaColor: "rgba(112,147,254,0.8)", textColor: "#202328", font: a.css("font-family") }, k), m = {
                light: {
                    backgroundColor: "#fff", color: "chart" == b.type ? "" != b.textColor ? [b.textColor] : "#202328" : "#202328", fontFamily: b.font, chartColors: "chart" == b.type ?
                        "" != b.areaColor ? [b.areaColor] : "rgba(112,147,254,0.8)" : ["rgba(108,130,145,0.2)"], titleColor: "chart" == b.type ? "" != b.areaColor ? [b.areaColor] : "rgba(112,147,254,0.8)" : "#656565", xAxis: "rgba(54,60,78,0.1)", yAxis: "rgba(54,60,78,0.1)", border: "#eee"
                }, dark: {
                    backgroundColor: "#202328", color: "chart" == b.type ? "" != b.textColor ? [b.textColor] : "#fff" : "#fff", fontFamily: b.font, chartColors: "chart" == b.type ? "" != b.areaColor ? [b.areaColor] : "rgba(112,147,254,0.8)" : ["rgba(108,130,145,0.2)"], titleColor: "chart" == b.type ? "" != b.areaColor ?
                        [b.areaColor] : "rgba(112,147,254,0.8)" : "#fff", xAxis: "#363c4e", yAxis: "#363c4e", border: "#202328"
                }
            }[b.theme], h = { day: 24, week: 168, month: 30, threemonths: 90, sixmonths: 180, year: 365 }, r = { day: "Day", week: "Week", month: "Month", threemonths: "3 Months", sixmonths: "6 Months", year: "Year" }, p = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), l = echarts.init(a.get(0)); k = {
                animation: !1, backgroundColor: m.backgroundColor, color: m.chartColors, textStyle: { color: m.color, fontFamily: m.fontFamily }, title: {
                    text: b.coin + "/" + b.currency,
                    subtext: r[b.period], textStyle: { color: m.titleColor }
                }, grid: { x: "chart" == b.type ? b.config.line.l : b.config.candlestick.l, x2: "chart" == b.type ? b.config.line.r : b.config.candlestick.r, y: 320 < a.width() ? 80 : 110, y2: 40 }, tooltip: {
                    trigger: "axis", formatter: function (d) {
                        var q = d[0].name; "chart" == b.type ? (q = q + "<br/>" + (d[0].marker + ' Price: <b style="color: #fff;">' + b.symbol + addCommas(d[0].value)), q += "</b>") : (q = q + "<br/>" + (d[0].marker + ' H: <b style="color: #fff;">' + b.symbol + addCommas(d[0].value[4]) + "</b>"), q += '  L: <b style="color: #fff;">' +
                            b.symbol + addCommas(d[0].value[3]) + "</b>", q = q + "<br/>" + (d[0].marker + ' O: <b style="color: #fff;">' + b.symbol + addCommas(d[0].value[2]) + "</b>"), q += '  C: <b style="color: #fff;">' + b.symbol + addCommas(d[0].value[1]) + "</b>", q = q + "<br/>" + (d[1].marker + ' V: <b style="color: #fff;">' + addCommas(d[1].value) + "</b> " + b.coin)); return q
                    }
                }, dataZoom: { show: !1, realtime: !0, start: 0, end: 100 }, toolbox: {
                    show: !0, itemSize: 22, left: 320 < a.width() ? "right" : "left", top: 320 < a.width() ? "top" : 50, feature: {
                        myTool1: {
                            show: !0, title: r.day, icon: "image://" +
                                mcp.url + "/assets/public/charts/images/1d-dark-01.svg", onclick: function () { c("day") }
                        }, myTool2: { show: !0, title: r.week, icon: "image://" + mcp.url + "/assets/public/charts/images/1w-dark-01.svg", onclick: function () { c("week") } }, myTool3: { show: !0, title: r.month, icon: "image://" + mcp.url + "/assets/public/charts/images/1m-dark-01.svg", onclick: function () { c("month") } }, myTool4: { show: !0, title: r.threemonths, icon: "image://" + mcp.url + "/assets/public/charts/images/3m-dark-01.svg", onclick: function () { c("threemonths") } }, myTool5: {
                            show: !0,
                            title: r.sixmonths, icon: "image://" + mcp.url + "/assets/public/charts/images/6m-dark-01.svg", onclick: function () { c("sixmonths") }
                        }, myTool6: { show: !0, title: r.year, icon: "image://" + mcp.url + "/assets/public/charts/images/1y-dark-01.svg", onclick: function () { c("year") } }, mark: { show: !1 }, dataView: { show: !1 }, magicType: { show: !1 }, restore: { show: !1 }, saveAsImage: { show: !1 }
                    }
                }, xAxis: [], yAxis: [], series: []
            }; "chart" == b.type ? (k.xAxis.push({ type: "category", boundaryGap: !1 }), k.yAxis.push({
                type: "value", scale: !0, axisLabel: { formatter: function (d) { return addCommas(d) } },
                splitLine: { show: !0, lineStyle: { color: m.yAxis, width: 1, type: "solid" } }, boundaryGap: ["5%", "0%"]
            }), k.series.push({ name: "Price", type: "line", smooth: b.smooth, itemStyle: { normal: { areaStyle: { type: "default" } } } })) : (k.xAxis.push({ type: "category", boundaryGap: !0, axisTick: { onGap: !1 }, splitLine: { show: !1 } }), k.yAxis.push({ type: "value", scale: !1, axisLabel: { formatter: function (d) { return addCommas(d) } }, splitLine: { show: !1 }, boundaryGap: ["0%", "0%"] }, {
                type: "value", scale: !0, axisLabel: { formatter: function (d) { return addCommas(d) } },
                splitLine: { show: !0, lineStyle: { color: m.yAxis, width: 1, type: "solid" } }, boundaryGap: ["0%", "0%"]
            }), k.series.push({ name: "OHLC", type: "k", itemStyle: { normal: { color: "#dc3545", color0: "#23BF08" } }, yAxisIndex: 1 }), k.series.push({ name: "Volume", type: "bar" })); a.css("background", m.backgroundColor); a.css("border-color", m.border); e(); jQuery(window).on("resize", function () { k.grid.y = 320 < a.width() ? 80 : 110; k.toolbox.left = 320 < a.width() ? "right" : "left"; k.toolbox.top = 320 < a.width() ? "top" : 50; l.setOption(k); l.resize() }); a.visibilityChanged({
                callback: function (d,
                    q, w) { q && jQuery(window).trigger("resize") }, runOnLoad: !0, frequency: 100
            })
        })
    }); jQuery(document).on("mcw", ".mcw-converter", function () {
        var a = jQuery(this); depp.require("selectize", function () {
            function c() {
                var n = m[0].selectize.options[m.val()].val, v = h[0].selectize.options[h.val()].val, t = "US" === mcp.numformat ? parseFloat(r.val().replace(/,/g, "")) : parseFloat(r.val().replace(/\./g, "")); n = "crypto" === e && "crypto" === k ? t ? n / v * t : "" : "fiat" === e && "fiat" === k ? t ? v / n * t : "" : "fiat" === e && "crypto" === k ? t ? t / (n * v) : "" : t ? t * n * v : ""; n = parseFloat(n);
                p.val(addCommas(n.toFixed(1 <= n ? 2 : 1E-6 > n ? 8 : 6)))
            } function g() { var n = m[0].selectize.options[m.val()].val, v = h[0].selectize.options[h.val()].val, t = "US" === mcp.numformat ? parseFloat(p.val().replace(/,/g, "")) : parseFloat(p.val().replace(/\./g, "")); n = "crypto" === e && "crypto" === k ? t ? v / n * t : "" : "fiat" === e && "fiat" === k ? t ? n / v * t : "" : "fiat" === e && "crypto" === k ? t ? t * n * v : "" : t ? 1 / v * t / n : ""; n = parseFloat(n); r.val(addCommas(n.toFixed(1 <= n ? 2 : 1E-6 > n ? 8 : 6))) } a.find("select").selectize({
                onInitialize: function () {
                    var n = this; this.revertSettings.$children.each(function () {
                        jQuery.extend(n.options[this.value],
                            jQuery(this).data())
                    }); n.$dropdown.addClass("mcw-conv-style")
                }, dropdownParent: "body"
            }); a.find(".mcw-convert-swap").click(function () { a.find(".mcw-form-group").eq(0).toggleClass("mcw-form-group-swap") }); var e = a.attr("data-from"), k = a.attr("data-to"), b = "true" == a.attr("data-auto"), m = a.find("select").first(), h = a.find("select").last(), r = a.find("input.mcw-field").first(), p = a.find("input.mcw-field").last(), l = "down", d = a.closest(".cryptoboxes").data("fiat"), q = a.closest(".cryptoboxes").data("crypto"), w = "fiat" ==
                e ? d : ""; d = "crypto" == e ? "fiat" == k ? d : "bitcoin" == m[0].value ? "ethereum" : "" : "fiat" == k ? "USD" == d ? "EUR" : "USD" : "" != q ? q : ""; "" != w && m[0].selectize.setValue(w); "" != d && h[0].selectize.setValue(d); r.val(1); c(); b ? (r.on("input", function () { c() }), p.on("input", function () { g() }), m.change(function () { g(); l = "up" }), h.change(function () { c(); l = "down" })) : (r.on("input", function () { l = "down" }), p.on("input", function () { l = "up" }), a.find(".mcw-button").click(function (n) { n.preventDefault(); "down" == l ? c() : g() }))
        })
    }); jQuery(document).on("mcw",
        ".mcw-card-7", function () {
            var a = jQuery(this); depp.require("bounty", function () {
                var c = a.find(".mcw-price"), g = 1, e = c.text(), k = 1 <= parseFloat(c.attr("data-price")) ? 2 : 1E-6 > parseFloat(c.attr("data-price")) ? 8 : 6; bounty["default"]({ el: c[0], initialValue: e, value: e }); window.socket.addEventListener("message", function (b) {
                    b = JSON.parse(b.data); if (c.data("live") == b.base && b.priceUsd !== parseFloat(c.attr("data-price"))) {
                        var m = c.attr("data-symbol") + addCommas(parseFloat(b.priceUsd * g).toFixed(k)); bounty["default"]({
                            el: c[0],
                            initialValue: e, value: m
                        }); e = m; c.attr("data-price", b.priceUsd)
                    }
                }); a.find(".mcw-toggle-switch").click(function () { g = jQuery(this).data("rate"); a.find(".mcw-toggle-switch").removeClass("active"); jQuery(this).addClass("active"); var b = jQuery(this).data("symbol") + addCommas(parseFloat(c.attr("data-price") * g).toFixed(k)); bounty["default"]({ el: c[0], initialValue: e, value: b }); e = b; c.attr("data-symbol", jQuery(this).data("symbol")) })
            })
        }); jQuery(document).on("mcw", ".mcw-box", function () {
            var a = jQuery(this); a.find("canvas").each(function () { jQuery(this).drawChart() });
            a.find(".chart-offset").show(); if (a.hasClass("mcw-box-2")) { var c = a.find(".mcw-crypto-convert"), g = a.find(".mcw-fiat-convert"); a.find("select").change(function () { var e = parseFloat(c.val()) * parseFloat(g.val()); e = e.toFixed(1 <= e ? 2 : 1E-6 > e ? 8 : 6); a.find(".mcw-price").html(e); e = g.find(":selected").data("prefix"); a.find(".mcw-price-symbol").html(e); e = c.find(":selected").data("change"); a.find(".mcw-list-change").html(Math.abs(e) + "%"); 0 <= e ? a.find(".mcw-list-change").toggleClass("down up") : a.find(".mcw-list-change").toggleClass("up down") }) }
        });
    jQuery(document).on("mcw", ".mcw-list", function () { var a = jQuery(this); a.find("canvas").each(function () { jQuery(this).drawChart() }); a.hasClass("mcw-list-2") && a.mcwAccordion() }); jQuery(document).on("mcw", ".mcw-multi-tabs", function () { var a = jQuery(this), c = a.find(".mcw-tab"), g = a.find(".mcw-tab-content"); c.click(function () { var e = jQuery(this).index(); c.removeClass("active"); jQuery(this).addClass("active"); g.not(":eq(" + e + ")").removeClass("active"); g.eq(e).addClass("active") }) }); jQuery.fn.multiply = function (a) {
        for (var c =
            this.clone(), g = 1; g < a; g++)c = c.add(this.clone()); return c
    }; jQuery.fn.coinmcResize = function () { var a = "xs", c = 0 < this.find(".cmc-row").length ? this.find(".cmc-row").eq(0).width() : this.width(); 992 <= c ? a = "lg" : 768 <= c ? a = "md" : 576 <= c && (a = "sm"); this.removeClass("cmcl-xs cmcl-sm cmcl-md cmcl-lg").addClass("cmcl-" + a); this.trigger("view") }; jQuery(document).on("mcw", ".mcw-ticker", function () {
        var a = 0, c = jQuery(this), g = c.find(".cc-stats"); c.imagesLoaded().then(function () {
            g.find(".cc-coin").each(function () { a += jQuery(this).innerWidth() });
            var e = g.find(".cc-coin"), k = g.innerWidth() / a; g.append('<div class="cc-dup"></div>'); .5 < k ? g.find(".cc-dup").append(e.multiply(Math.ceil(k))) : g.find(".cc-dup").append(e.multiply(1)); g.css("width", a); g.find("canvas").each(function () { jQuery(this).drawChart() }); e = g.find(".cc-coin").length; k = a / e; var b = c.data("speed"), m = 10 * k; 200 === b ? m = 10 : 0 == b ? m = 0 : 100 < b ? m -= (b - 100) / 10 * k : 100 > b && (m += (100 - b) / 10 * 8 * k); g.css("animation-duration", e * m / 1E3 + "s"); c.css("visibility", "visible"); c.hasClass("mcw-header") && jQuery("body, .navbar-vertical").css("padding-top",
                c.height() + "px")
        })
    }); jQuery(".mcw-tr").each(function () { jQuery(this).trigger("mcw") }); Array.prototype.unique = function () { return this.filter(function (a, c, g) { return g.indexOf(a) === c }) }; var f = [], u = []; jQuery(".cryptohopper-web-widget").each(function () { f.push(jQuery(this).data("id")); var a = createPostData(this); u.push(a) }); 0 < f.length && jQuery.ajax({
        type: "GET", dataType: "json", url: mcp.url + "/widgets/?id=" + rawurlencode(JSON.stringify(u)), timeout: 2500, success: function (a) {
            jQuery(".cryptohopper-web-widget").each(function () {
                var c =
                    jQuery(this).data("id"); jQuery(this).html(a[c]); jQuery(this).find(".mcw-tr").trigger("mcw")
            }); jQuery(".mcw-dark-theme,.mcw-midnight-theme,.mcw-custom-theme,.mcw-table.dark").each(function () { jQuery(this).invertable() }); realtimeUpdate()
        }, error: function (a, c, g) { }
    })
});
function createPostData(f) {
    var u = { id: jQuery(f).data("id") }, a = {}; "on" == jQuery(f).data("realtime") ? a.realtime = 1 : a.realtime = 0; for (var c = "realtime price_format chart_color label_design thumbnails fullwidth card_design chart_theme chart_view chart_type table_columns converter_type box_design list_design multi_currencies news_count news_length currency2 text_color background_color theme numcoins table_length title currency table_title chart_theme table_style atid round changes ticker_design logos changes coins ticker_speed ticker_position".split(" "), g =
        0; g < c.length; g++) { var e = c[g]; "undefined" !== typeof jQuery(f).data(e) && ("realtime" == e ? "on" == jQuery(f).data("realtime") ? a.realtime = 1 : a.realtime = 0 : a[e] = jQuery(f).data(e)) } u.options = a; return u
} function rawurlencode(f) { return encodeURIComponent(f).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A") };