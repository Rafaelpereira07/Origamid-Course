const link = document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  // link.href = "https://www.origamid.com";
  link.href = link.href.replace("http://", "https://");
}
