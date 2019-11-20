Feature:  Login Action

 
  Scenario Outline: successful login with valid credencials
    Given user is open the application
    When user click on to login link
    And user click enters "<username>" and "<password>"
    Then message displayed login successfully

    Examples: 
      | username| password|
      | aravind.guggilla57@gmail.com  |aravind|
      | aishwaryamusale123@gmail.com |Aish12|
