/* Shared document utility for louppe.eu. */
(function () {
  var root = document.documentElement;
  var grainSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512'>" +
    "<filter id='n' color-interpolation-filters='sRGB'><feTurbulence type='fractalNoise' baseFrequency='0.65' " +
    "numOctaves='4' stitchTiles='stitch'/></filter>" +
    "<rect width='512' height='512' filter='url(#n)'/></svg>";
  root.style.setProperty("--grain-url", 'url("data:image/svg+xml,' + encodeURIComponent(grainSvg) + '")');

  var parallaxBlobs = Array.from(document.querySelectorAll(".mesh-blob"), function (blob) {
    return {
      element: blob,
      speed: parseFloat(getComputedStyle(blob).getPropertyValue("--blob-scroll-speed")) || 0.7
    };
  });
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var parallaxFrame = 0;

  function updateParallax() {
    parallaxFrame = 0;
    parallaxBlobs.forEach(function (blob) {
      var offset = window.scrollY * (1 - blob.speed);
      blob.element.style.setProperty("--blob-parallax-y", offset + "px");
    });
  }

  function scheduleParallax() {
    if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax);
  }

  if (parallaxBlobs.length && !reduceMotion.matches) {
    window.addEventListener("scroll", scheduleParallax, { passive: true });
    updateParallax();
  }

  var copyButton = document.querySelector("[data-copy-markdown]");
  if (!copyButton) return;

  function inlineMarkdown(el) {
    return Array.from(el.childNodes).map(function (node) {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent;
      if (node.nodeType !== Node.ELEMENT_NODE) return "";
      if (node.matches(".leader, .tag")) return "";
      if (node.tagName === "A") {
        var label = node.textContent.trim();
        return node.getAttribute("href") ? "[" + label + "](" + node.href + ")" : label;
      }
      return inlineMarkdown(node);
    }).join("").replace(/\s+/g, " ").trim();
  }

  function push(lines, prefix, value) {
    if (value) lines.push(prefix + value);
  }

  function pageMarkdown() {
    var lines = [];
    var title = document.querySelector("h1");
    if (title) push(lines, "# ", title.textContent.trim());

    document.querySelectorAll(".stack section").forEach(function (section) {
      var heading = section.querySelector(".heading, .name");
      if (!heading) return;
      if (heading !== title) lines.push("", "## " + heading.textContent.trim(), "");

      section.querySelectorAll(":scope > .meta, :scope > .desc").forEach(function (prose) {
        push(lines, "", inlineMarkdown(prose));
      });

      section.querySelectorAll(":scope > ul > li").forEach(function (item) {
        var row = item.matches(".row") ? item : item.querySelector(":scope > .row");
        if (!row) return;
        var link = row.querySelector("a");
        var tag = row.querySelector(".tag");
        var desc = item.querySelector(":scope > .desc");
        var text = link && link.getAttribute("href")
          ? "[" + link.textContent.trim() + "](" + link.href + ")"
          : inlineMarkdown(row);
        if (!text) return;
        if (tag && tag.textContent.trim()) text += " — " + tag.textContent.trim();
        lines.push("- " + text);
        if (desc) push(lines, "  ", inlineMarkdown(desc));
      });
    });

    var updated = document.querySelector(".footer-date");
    lines.push("", "---", "", "source: " + location.href);
    if (updated) lines.push(updated.textContent.trim());
    return lines.join("\n").replace(/\n{3,}/g, "\n\n") + "\n";
  }

  function fallbackCopy(value) {
    var area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.className = "copy-source";
    document.body.appendChild(area);
    area.focus({ preventScroll: true });
    area.select();
    area.setSelectionRange(0, area.value.length);
    var copied = false;
    try { copied = document.execCommand("copy"); }
    finally { area.remove(); }
    return copied ? Promise.resolve() : Promise.reject();
  }

  function writeClipboard(value) {
    if (!navigator.clipboard || !window.isSecureContext) return fallbackCopy(value);
    return navigator.clipboard.writeText(value).catch(function () { return fallbackCopy(value); });
  }

  var defaultLabel = copyButton.textContent;
  var resetTimer;
  function flash(label) {
    copyButton.textContent = label;
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(function () { copyButton.textContent = defaultLabel; }, 1800);
  }

  copyButton.addEventListener("click", function () {
    writeClipboard(pageMarkdown()).then(function () { flash("copied as markdown"); })
      .catch(function () { flash("copy failed"); });
  });
})();
