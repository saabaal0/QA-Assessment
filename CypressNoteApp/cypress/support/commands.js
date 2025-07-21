import LoginPage from "../pages/LoginPage";

Cypress.Commands.add('Login',(email, password) => {
    LoginPage.visit();
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.clickLogin();
})