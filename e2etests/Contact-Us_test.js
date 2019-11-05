// Scenario("Template", (I) => {


// });

// Feature("Contact Us Support Widget").tag("@contactUs");


// Scenario("Test that site visitors can submit a contact us form", async (I) => {
//     I.say("I can send a test email to aevi support via the support widget");
//     I.amOnPage("https://developer.aevi-test.com");
//     I.wait(4);
//     I.say("I click on the support widget icon")
//     I.click({xpath: '/html/body/a[2]'});
//     I.wait(4);
//     I.say("I fill fields");
//     I.fillField("#contact_name", "automated-test");
//     I.fillField("#contact_email", "autotest@email.com");
//     I.fillField("#contact_company", "auto-test");
//     I.fillField("#contact_website", "https://www.test.com");
//     I.selectOption("#contact_role", "Other");
//     I.fillField("#contact_message", "This is a test, by aevi automated testing sent via the support widget");
//     I.click({"name": "commit"});
//     I.see("Enquiry sent");
//     //Need to validate this email reached the contact us email

//     I.say("I can send a test email to aevi support via the contact us page");
//     I.amOnPage("https://developer.aevi-test.com");
//     I.wait(4);
//     I.say("I click on the support widget icon")
//     I.click({xpath: '/html/body/header/div/div/nav/ul[2]/li[2]/a'});
//     I.wait(4);
//     I.say("I fill fields");
//     I.fillField("#contact_name", "automated-test");
//     I.fillField("#contact_email", "autotest@email.com");
//     I.fillField("#contact_company", "auto-test");
//     I.fillField("#contact_website", "https://www.test.com");
//     I.selectOption("#contact_role", "Other");
//     I.fillField("#contact_message", "This is a test, by aevi automated testing sent via the contact us page");
//     I.click({"name": "commit"});
//     I.see("Enquiry sent");

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1576");


// Scenario("Test that a developer can send a query on the contact us page and the support widget", (I) => {
//     I.say("I log into the developer portal as a portal user");
//     I.amOnPage(process.env.developer_user_site);
//     I.fillField('Email', process.env.regular_user);
//     I.fillField('Password', secret(process.env.regular_user_password));
//     I.click('Log in');
//     I.see('Signed in successfully.');
    
//     I.say("I can send a test email to aevi support via the contact us form as a developer user");
//     I.click({xpath: '/html/body/header/div/div/nav/ul[2]/li[2]/a'});
//     I.say("The name, email and company fields are prepopulated with the developers details");
//     //edit values below to match the developer user details used to login
//     I.seeInField("#contact_name", "Reg-Joe Fallon");
//     I.seeInField("#contact_email", "joseph.fallon.ext@aevi.com");
//     I.seeInField("#contact_company", "AEVI");
//     I.fillField("#contact_website", "https://www.testdeveloper.com");
//     I.selectOption("#contact_role", "Other");
//     I.fillField("#contact_message", "This is a test, by developer user sent via the contact us page");
//     I.click({"name": "commit"});
//     I.see("Enquiry sent");
    
//     I.say("I can send a test email to aevi support via the support widget as a developer user");
//     I.amOnPage("https://developer.aevi-test.com");
//     I.click({xpath: '/html/body/a[2]'});
//     I.say("The name, email and company fields are prepopulated with the developers details");
//     //edit values below to match the developer user details used to login
//     I.seeInField("#contact_name", "Reg-Joe Fallon");
//     I.seeInField("#contact_email", "joseph.fallon.ext@aevi.com");
//     I.seeInField("#contact_company", "AEVI");
//     I.fillField("#contact_website", "https://www.testdeveloper.com");
//     I.selectOption("#contact_role", "Other");
//     I.fillField("#contact_message", "This is a test, by developer user sent via the support widget");
//     I.click({"name": "commit"});
//     I.see("Enquiry sent");
    


// }).tag("@https://jira.aevi.com/browse/AEVICOM-1656");
