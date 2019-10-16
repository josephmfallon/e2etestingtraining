
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    login() {
      this.amOnPage(process.env.aevi_admin_site);
      this.fillField('Email', process.env.aevi_user);
      this.fillField('Password', secret(process.env.aevi_password));
      this.click('Log in');
      this.see('Signed in successfully.');
      }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
