jQuery($ => {
  const el = document.getElementsByClassName("tabs")[0];

  M.Tabs.init(el, {
    onShow(tab) {
      console.log(tab);

      $.get(`${tab.id}.js?callback=?`, data => {
        $(`#${tab.id}_code`).text(data.result);
      });
    }
  });
});
