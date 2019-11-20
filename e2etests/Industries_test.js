// Feature("Industries").tag("@industries");

// Before(login => {
//             login('admin'); // login using user session
//         });

// // Scenario("Template", (I) => {


// // }).tag("@name");


// Scenario("Create a new Industry", async (I) => {
//     I.say("Test that a user can cancel a industry creation");
//     // Unable to use scroll down function and ellements aren't discoverable if they are too far down a page, so switch to a page with less scrolling
//     //Switch to News
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.say("I can access the Industries page");
//     I.click("Manage Industries");
//     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/industries");
//     I.see("New Industry");
//     I.click("New Industry");
//     I.seeInCurrentUrl("https://developer.aevi-test.com/admin/aevi/industries/new");
//     I.fillField("#industry_name", "auto_test_industry");
//     I.click("Cancel");

//     I.say("Test that a user can create an industry")
//     // Unable to use scroll down function and ellements aren't discoverable if they are too far down a page, so switch to a page with less scrolling
//     //Switch to News
//     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/industries");
//     I.see("New Industry");
//     I.click("New Industry");
//     I.seeInCurrentUrl("https://developer.aevi-test.com/admin/aevi/industries/new");
//     I.fillField("#industry_name", "auto_test_industry");
//     I.click({"name": "commit"}); 
//     I.see("Industry created successfully");

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1607");

// Scenario("Industry Details can be edited as an AEVI User", async (I) => {
//     I.say("Test that a user can edit an industry")
//     // Unable to use scroll down function and ellements aren't discoverable if they are too far down a page, so switch to a page with less scrolling
//     //Switch to News
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.say("I can access the Industries page");
//     I.click("Manage Industries");
//     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/industries");
//     I.say("I click edit on the industry"); 
// //     //Create parameters for the industry row to be changed, change "auto_test_industry" to the industry you wish to change
//     edit_button = await locate('a').withAttr({'class': "o-icon  c-darkLink"}).inside(locate('tr').withAttr({'data-name': 'auto_test_industry'}));
//     delete_button = await locate('a').withAttr({'data-confirm': 'Are you sure?'}).inside(locate('tr').withAttr({'data-name': 'auto_test_industry'}));
//     I.click(edit_button);
//     I.fillField("#industry_name", "auto_test_industry_edit");
//     I.click({"name": "commit"});
//     I.see("Industry updated successfully");
//     I.see("auto_test_industry_edit");

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1640");

// Scenario("Industries can be deleted", async (I) => {
//     I.say("Test that a user can delete an industry")
//     // Unable to use scroll down function and ellements aren't discoverable if they are too far down a page, so switch to a page with less scrolling
//     //Switch to News
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.say("I can access the Industries page");
//     I.click("Manage Industries");
//     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/industries");
//     // Create parameters for the industry row to be changed, change "auto_test_industry_edit" to the industry you wish to change
//     edit_button = await locate('a').withAttr({'class': "o-icon  c-darkLink"}).inside(locate('tr').withAttr({'data-name': 'auto_test_industry_edit'}));
//     delete_button = await locate('a').withAttr({'data-confirm': 'Are you sure?'}).inside(locate('tr').withAttr({'data-name': 'auto_test_industry_edit'}));
//     I.say("I click delete on the industry");    
//     I.click(delete_button);
//     I.acceptPopup();
//     I.dontSee("auto_test_industry_edit");

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1613");
