window.addEventListener("load", function(){
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#000"
      },
      "button": {
        "background": "#f1d600"
      }
    },
    "content": {
      "message": "Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych oraz funkcjonalnych. Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. ",
      "dismiss": "Zrozumiałem!",
      "link": "Kliknij po więcej"
    }
  })});

  function onclickHandler()

  {

    alert('Akapit został kliknięty!');

  }