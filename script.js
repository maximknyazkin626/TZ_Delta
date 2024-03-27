Highcharts.chart("chart", {
  title: {
    text: "Выручка, руб",
  },
  series: [
    {
      name: "Выручка, руб",
      color: "green",
      data: [480000, 496354, 500123, 499025, 498456, 476340, 500521],
    },
  ],
});

const show = document.querySelectorAll(".show");
const hidden = document.getElementById("hidden");
let isHidden = true;

show.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden.style.display === "none") {
      hidden.style.display = "block";
    } else {
      hidden.style.display = "none";
    }
  });
});

Highcharts.chart("chart2", {
  title: {
    text: "Наличные",
  },
  series: [
    {
      name: "Наличные",
      color: "green",
      data: [274349, 264566, 301923, 283595, 238943, 270323, 300000],
    },
  ],
});

const show_cash = document.querySelectorAll(".show_cash");
const hidden_cash = document.getElementById("hidden_cash");
let isHidden_cash = true;

show_cash.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_cash.style.display === "none") {
      hidden_cash.style.display = "block";
    } else {
      hidden_cash.style.display = "none";
    }
  });
});

Highcharts.chart("chart3", {
  title: {
    text: "Безналичный расчёт",
  },
  series: [
    {
      name: "Безналичный расчёт",
      color: "green",
      data: [100002, 103302, 100532, 160062, 105302, 1043002, 100000],
    },
  ],
});

const show_non_cash = document.querySelectorAll(".show_non_cash");
const hidden_non_cash = document.getElementById("hidden_non_cash");
let isHidden_non_cash = true;

show_non_cash.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_non_cash.style.display === "none") {
      hidden_non_cash.style.display = "block";
    } else {
      hidden_non_cash.style.display = "none";
    }
  });
});

Highcharts.chart("chart4", {
  title: {
    text: "Кредитные карты",
  },
  series: [
    {
      name: "Кредитные карты",
      color: "green",
      data: [100521, 103221, 100532, 100321, 105302, 1043002, 100521],
    },
  ],
});

const show_credit = document.querySelectorAll(".show_credit");
const hidden_credit = document.getElementById("hidden_credit");
let isHidden_credit = true;

show_credit.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_credit.style.display === "none") {
      hidden_credit.style.display = "block";
    } else {
      hidden_credit.style.display = "none";
    }
  });
});

Highcharts.chart("chart5", {
  title: {
    text: "Средний чек",
  },
  series: [
    {
      name: "Средний чек",
      color: "green",
      data: [900, 760, 1200, 1023, 923, 845, 1005],
    },
  ],
});

const show_average_check = document.querySelectorAll(".show_average_check");
const hidden_average_check = document.getElementById("hidden_average_check");
let isHidden_average_check = true;

show_average_check.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_average_check.style.display === "none") {
      hidden_average_check.style.display = "block";
    } else {
      hidden_average_check.style.display = "none";
    }
  });
});

Highcharts.chart("chart6", {
  title: {
    text: "Средний гость",
  },
  series: [
    {
      name: "Средний гость",
      color: "green",
      data: [1200, 1260, 1204, 1023, 1123, 975, 1005],
    },
  ],
});

const show_average_guest = document.querySelectorAll(".show_average_guest");
const hidden_average_guest = document.getElementById("hidden_average_guest");
let isHidden_average_guest = true;

show_average_guest.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_average_guest.style.display === "none") {
      hidden_average_guest.style.display = "block";
    } else {
      hidden_average_guest.style.display = "none";
    }
  });
});

Highcharts.chart("chart7", {
  title: {
    text: "Удаление из чека (после оплаты)",
  },
  series: [
    {
      name: "Удаление из чека (после оплаты)",
      color: "green",
      data: [1100, 1160, 1204, 1023, 923, 975, 1005],
    },
  ],
});

const show_del_after = document.querySelectorAll(".show_del_after");
const hidden_del_after = document.getElementById("hidden_del_after");
let isHidden_del_after = true;

show_del_after.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_del_after.style.display === "none") {
      hidden_del_after.style.display = "block";
    } else {
      hidden_del_after.style.display = "none";
    }
  });
});

Highcharts.chart("chart8", {
  title: {
    text: "Удаление из чека (до оплаты)",
  },
  series: [
    {
      name: "Удаление из чека (до оплаты)",
      color: "green",
      data: [900, 1060, 1004, 1013, 953, 975, 1045],
    },
  ],
});

const show_del_before = document.querySelectorAll(".show_del_before");
const hidden_del_before = document.getElementById("hidden_del_before");
let isHidden_del_before = true;

show_del_before.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_del_before.style.display === "none") {
      hidden_del_before.style.display = "block";
    } else {
      hidden_del_before.style.display = "none";
    }
  });
});

Highcharts.chart("chart9", {
  title: {
    text: "Количество чеков",
  },
  series: [
    {
      name: "Количество чеков",
      color: "green",
      data: [33, 33, 32, 34, 36, 34, 35],
    },
  ],
});

const show_cheks_number = document.querySelectorAll(".show_cheks_number");
const hidden_cheks_number = document.getElementById("hidden_cheks_number");
let isHidden_cheks_number = true;

show_cheks_number.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_cheks_number.style.display === "none") {
      hidden_cheks_number.style.display = "block";
    } else {
      hidden_cheks_number.style.display = "none";
    }
  });
});

Highcharts.chart("chart10", {
  title: {
    text: "Количество гостей",
  },
  series: [
    {
      name: "Количество гостей",
      color: "green",
      data: [32, 31, 31, 33, 33, 34, 35],
    },
  ],
});

const show_guests_number = document.querySelectorAll(".show_guests_number");
const hidden_guests_number = document.getElementById("hidden_guests_number");
let isHidden_guests_number = true;

show_guests_number.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (hidden_guests_number.style.display === "none") {
      hidden_guests_number.style.display = "block";
    } else {
      hidden_guests_number.style.display = "none";
    }
  });
});
