window.tabs = M.Tabs.getInstance(".tabs");

window.jQuery($ => {
  const dashTypes = [
    "one-to-one",
    "one-to-many",
    "many-to-one",
    "many-to-many"
  ];

  dashTypes.forEach(dashType => {
    $.get(`${dashType}.js?callback=?`, data => {
      $(`#${dashType}_code`).text(data.result);
    });
  });
});
