$(function () {
  const phrases = [
    "Наш менеджер перезвонит Вам в ближайшее время!",
    "Уточнить детали можно по телефону 123456789",
    "Оставайтесь на связи!",
    "Сегодня прекрасная погода!",
    "С Вами очень приятно общаться!",
  ];
  const js = [
    "В JavaScript есть много методов для работы со строкой",
    "Массивы в JavaScript похожи на объекты",
  ];
  const html = [
    "Чтобы украсить HTML мы используем CSS",
    "В HTML мы пишем код с помощью тегов",
  ];
  const php = [
    "PHP используется для backend",
    "PHP мы будем учить в следующем году :)",
  ];
  const hello = "Привет!";
  const bye = "Пока, было приятно пообщаться!";

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });

  $("#answers").append(`<div class="bot-answ">${hello}</div>`);

  $("#answers").click(function () {
    return false; // preventDefault() and stopPropagation()
  });

  $("#ok").click(function () {
    let q = $("#question").val().trim();
    $("#question").val("");
    if (q != "") {
      $("#answers").append(`<div class="hum-answ">${q}</div>`);

      setTimeout(function () {
        if (q.toLowerCase().includes("привет")) {
          $("#answers").append(`<div class="bot-answ">${hello}</div>`);
        } else if (
          q.toLowerCase().includes("пока") ||
          q.toLowerCase().includes("до свидания")
        ) {
          $("#answers").append(`<div class="bot-answ">${bye}</div>`);
        } else if (q.toLowerCase().includes("ты кто?")) {
          $("#answers").append(`<div class="bot-answ">Я бот Василий :)</div>`);
        } else if (q.toLowerCase().includes("javascript")) {
          const jsAnsw = js[Math.floor(Math.random() * js.length)];
          $("#answers").append(`<div class="bot-answ">${jsAnsw}</div>`);
        } else if (q.toLowerCase().includes("html")) {
          const htmlAnsw = html[Math.floor(Math.random() * html.length)];
          $("#answers").append(`<div class="bot-answ">${htmlAnsw}</div>`);
        } else if (q.toLowerCase().includes("php")) {
          const phpAnsw = php[Math.floor(Math.random() * php.length)];
          $("#answers").append(`<div class="bot-answ">${phpAnsw}</div>`);
        } else {
          const random = Math.floor(Math.random() * phrases.length);
          const phrase = phrases[random];
          $("#answers").append(`<div class="bot-answ">${phrase}</div>`);
        }

        const chatbot = document.getElementById("chatbot");
        $("#chatbot").animate(
          { scrollTop: chatbot.scrollHeight - chatbot.clientHeight },
          100
        );
      }, 1000);
    }
    return false;
  });

  $("#question").click(function () {
    return false;
  });

  function enterKey(event) {
    if (event.keyCode == 13) {
      $("#ok").click();
      return false;
    }
  }

  $("#question").keypress("keyup", enterKey);
});
