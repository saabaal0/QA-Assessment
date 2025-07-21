import RegisterPage from "../pages/RegisterPage";
import RegisterAssertions from "../assertions/RegisterAssertion";

describe("User Registration", () => {
  beforeEach(function () {
    cy.fixture("registerUser").as("userData");
    RegisterPage.visit();
  });

  it("Register a new user successfully", function () {
    const user = this.userData.validUser;
    const timestampedEmail = `sabal_${Date.now()}@yopmail.com`;

    RegisterPage.fillEmail(timestampedEmail);
    RegisterPage.fillName(user.name);
    RegisterPage.fillPassword(user.password);
    RegisterPage.fillConfirmPassword(user.password);
    RegisterPage.clickRegister();
    RegisterAssertions.assertSuccessMessage();
  });

  it("Verify error for already registered email", function () {
    const user = this.userData.existingUser;

    RegisterPage.fillEmail(user.email);
    RegisterPage.fillName(user.name);
    RegisterPage.fillPassword(user.password);
    RegisterPage.fillConfirmPassword(user.password);
    RegisterPage.clickRegister();
    RegisterAssertions.assertErrorMessage();
  });

  it("Show validation error for mismatched passwords", function () {
    const user = this.userData.mismatchPasswordUser;

    RegisterPage.fillEmail(user.email);
    RegisterPage.fillName(user.name);
    RegisterPage.fillPassword(user.password);
    RegisterPage.fillConfirmPassword(user.confirmPassword);
    RegisterPage.clickRegister();
    RegisterAssertions.assertValidationErrorMessage("Passwords don't match");
  });
  it("Show validation error for empty fields", function () {
    RegisterPage.clickRegister();
    RegisterAssertions.assertValidationErrorMessage();
   
  });
});
