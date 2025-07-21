import LoginPage from "../pages/LoginPage";
import LoginAssertion from "../assertions/LoginAssertion";

describe("User Login", () => {
  beforeEach(() => {
    cy.fixture("loginUser").as("userData");
    LoginPage.visit();
  });

  it("logs in successfully with valid credentials", function () {
    const user = this.userData.existingUser;
    cy.Login(user.email, user.password);
    LoginAssertion.assertSuccessfulLogin();
  });

  it("Failed login with invalid credentials", function () {
    const user = this.userData.nonExistentUser;
    cy.Login(user.email, user.password);
    LoginAssertion.assertFailedLogin();
  });

  it("Failed login with empty credentials", function () {
    LoginAssertion.assertEmptyLogin();
  });

  it("Failed login with invalid email format", function () {
    const user = this.userData.invalidEmailUser;
    cy.Login(user.email, user.password);
    LoginAssertion.assertInvalidEmail();
  });
});
