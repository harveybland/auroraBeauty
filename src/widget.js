!(function (e, t, n) {
  var u = n.queue || [];
  (e.BookAppWidgetReady = n =
    function (e) {
      n.queue.push(e);
    }),
    (n.queue = u);
  var o = "script",
    a = t.createElement(o),
    i = t.getElementsByTagName(o)[0];
  (a.src = "https://cdn.book.app/embed/v1.js"),
    (a.type = "text/javascript"),
    (a.async = !0),
    a.addEventListener(
      "load",
      function () {
        for (; n.queue.length; ) n.queue.shift()();
      },
      !1
    ),
    i.parentNode.insertBefore(a, i);
})(window, document, window.BookAppWidgetReady || function () {});
BookAppWidgetReady(function () {
  BookApp.widget("#bookapp-reservation-widget", "Aurorabeautyclitheroe");
});
