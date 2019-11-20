$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:feature/scenariooutlone(parameterisatio).feature");
formatter.feature({
  "name": "Login Action",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "successful login with valid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is open the application",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on to login link",
  "keyword": "When "
});
formatter.step({
  "name": "user click enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "message displayed login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "aravind.guggilla57@gmail.com",
        "aravind"
      ]
    },
    {
      "cells": [
        "aishwaryamusale123@gmail.com",
        "Aish12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "successful login with valid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "scenariooutlineparameter.user_is_open_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on to login link",
  "keyword": "When "
});
formatter.match({
  "location": "scenariooutlineparameter.user_click_on_to_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click enters \"aravind.guggilla57@gmail.com\" and \"aravind\"",
  "keyword": "And "
});
formatter.match({
  "location": "scenariooutlineparameter.user_click_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "scenariooutlineparameter.message_displayed_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "successful login with valid credencials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "scenariooutlineparameter.user_is_open_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on to login link",
  "keyword": "When "
});
formatter.match({
  "location": "scenariooutlineparameter.user_click_on_to_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click enters \"aishwaryamusale123@gmail.com\" and \"Aish12\"",
  "keyword": "And "
});
formatter.match({
  "location": "scenariooutlineparameter.user_click_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "scenariooutlineparameter.message_displayed_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});