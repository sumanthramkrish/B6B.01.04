$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:feature/demo1.feature");
formatter.feature({
  "name": "login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User enters Username and Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The login page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "logintestmeapp.the_login_page_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters lalitha as username",
  "keyword": "When "
});
formatter.match({
  "location": "logintestmeapp.user_enters_lalitha_as_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as password123",
  "keyword": "And "
});
formatter.match({
  "location": "logintestmeapp.user_enters_password_as_password(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Finds a testmeapp homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "logintestmeapp.user_will_Finds_a_testmeapp_homepage()"
});
formatter.result({
  "status": "passed"
});
});