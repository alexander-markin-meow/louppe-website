/* Google Analytics is never requested until the visitor opts in. */
(function () {
  "use strict";

  var measurementId = "G-9P9KKLZ5BN";
  var storageKey = "louppe.analytics-consent.v1";
  var choiceLifetime = 180 * 24 * 60 * 60 * 1000;
  var banner = document.getElementById("analytics-consent");
  var settings = document.querySelector("[data-analytics-settings]");
  var choices = document.querySelectorAll("[data-analytics-choice]");
  var analyticsLoaded = false;
  if (!banner || !settings || choices.length !== 2) return;

  function savedChoice() {
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey));
      if (saved && (saved.value === "accepted" || saved.value === "rejected") &&
          Number.isFinite(saved.at) && Date.now() - saved.at < choiceLifetime &&
          saved.at <= Date.now()) return saved.value;
    } catch (_) { /* A blocked storage API leaves consent undecided. */ }
    return null;
  }

  function remember(value) {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ value: value, at: Date.now() }));
    } catch (_) { /* This visit still follows the visitor's choice. */ }
  }

  function removeAnalyticsCookies() {
    document.cookie.split(";").forEach(function (part) {
      var name = part.split("=")[0].trim();
      if (name !== "_ga" && name.indexOf("_ga_") !== 0) return;
      document.cookie = name + "=; Max-Age=0; Path=/; SameSite=Lax";
      document.cookie = name + "=; Max-Age=0; Path=/; Domain=.louppe.eu; SameSite=Lax";
    });
  }

  function loadAnalytics() {
    // Keep local previews and copied deployments out of the production property.
    if (location.hostname !== "louppe.eu" || location.protocol !== "https:") return;
    if (analyticsLoaded) return;
    analyticsLoaded = true;
    window["ga-disable-" + measurementId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_expires: 30 * 24 * 60 * 60,
      cookie_update: false
    });
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + measurementId;
    document.head.appendChild(script);
  }

  function choose(value) {
    remember(value);
    banner.hidden = true;
    settings.focus();
    if (value === "accepted") {
      loadAnalytics();
    } else {
      window["ga-disable-" + measurementId] = true;
      removeAnalyticsCookies();
      if (analyticsLoaded) window.location.reload();
    }
  }

  choices.forEach(function (button) {
    button.addEventListener("click", function () {
      choose(button.getAttribute("data-analytics-choice"));
    });
  });
  settings.addEventListener("click", function () {
    banner.hidden = false;
    choices[0].focus();
  });

  var initialChoice = savedChoice();
  if (initialChoice === "accepted") {
    loadAnalytics();
  } else if (initialChoice === "rejected") {
    removeAnalyticsCookies();
  } else {
    removeAnalyticsCookies();
    banner.hidden = false;
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest && event.target.closest("a[href]");
    if (!link || !analyticsLoaded || window["ga-disable-" + measurementId] ||
        location.hostname !== "louppe.eu" || location.protocol !== "https:") return;
    var url = new URL(link.href, location.href);
    if (url.hostname !== "github.com" ||
        url.pathname !== "/alexander-markin-meow/louppe-media-culler/releases/latest/download/Louppe.zip") return;
    // A download click is intent, not a confirmed installation.
    window.gtag("event", "louppe_download", { send_to: measurementId });
  });
})();
