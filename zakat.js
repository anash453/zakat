// Ye v thoda samhj nhi aaya

let getvalue = (id) => {
    let value = document.getElementById(id).value;
    if (value == "" || isNaN(value)) {
      return 0;
    } else {
      return parseFloat(value);
    }
  };
  
  // Yahan Taak
  
  let calculate = () => {
    let amt_nisab = 5301;
    let amt_home = getvalue("amount_home");
    let amt_bank = getvalue("amount_bank");
    let amt_shares = getvalue("amount_shares");
    let amt_merchandise = getvalue("amount_merchandise");
    let amt_gold = getvalue("amount_gold");
    let amt_property = getvalue("amount_property");
    let amt_other = getvalue("amount_other");
    let amt_debts = getvalue("amount_debts");
    let amt_expenses = getvalue("amount_expenses");
  
    let amt_assets_gross =
      amt_home +
      amt_bank +
      amt_shares +
      amt_merchandise +
      amt_gold +
      amt_property +
      amt_other;
  
    let amt_assets_net = amt_assets_gross - amt_debts - amt_expenses;
    let amt_eligible = 0;
  
    // Yahan Thoda Doubt
  
    if (amt_assets_net > amt_nisab) {
      amt_eligible = Math.ceil(amt_assets_net);
    }
  
    let amt_zakat = Math.ceil(amt_eligible * 0.025);
  
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  
    // Yahan Taak
  
    document.getElementById("amount_eligible").value =
      formatter.format(amt_eligible);
    document.getElementById("amount_zakat").value = formatter.format(amt_zakat);
  
    if (amt_zakat > 0) {
      document.getElementById("donate_button").innerText =
        formatter.format(amt_zakat) + "Zakat";
      document.getElementById("donate_button").dataset.amount = amt_zakat;
    } else {
      document.getElementById("donate_button").text = "Donate Now";
      document.getElementById("donate_button").dataset.amount = 50;
    }
  };
  
  // Yahan se samhj nhi aaya
  
  (function (f, u, n, r, a, i, s, e) {
    let data = {
      window: window,
      document: document,
      tag: "script",
      data: "funraise",
      orgId: f,
      uri: u,
      common: n,
      client: r,
      script: a,
    };
    let scripts;
    let funraiseScript;
    data.window[data.data] = data.window[data.data] || [];
    if (
      data.window[data.data].scriptIsLoading ||
      data.window[data.data].scriptIsLoaded
    )
      return;
    data.window[data.data].loading = true;
    data.window[data.data].push("init", data);
    scripts = data.document.getElementsByTagName(data.tag)[0];
    funraiseScript = data.document.createElement(data.tag);
    funraiseScript.async = true;
    funraiseScript.src =
      data.uri + data.common + data.script + "?orgId=" + data.orgId;
    scripts.parentNode.insertBefore(funraiseScript, scripts);
  })(
    "1e78fec4-8fd0-4a3e-b82b-866c29012531",
    "https://assets-dev.funraise.io",
    "/widget/common/2.0",
    "/widget/client",
    "/inject-form.js"
  );
  
  window.funraise.push("create", { form: 2426 });