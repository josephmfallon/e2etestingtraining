// Feature("Categories").tag("@categories");


// Before(login => {
//             login('admin'); // login using user session
//         });

// Scenario("Template", (I) => {


// }).tag("@name");


// Scenario("I can create a new Category", async (I) => {

//     I.say("Test that a user can cancel a category creation");
//     // Unable to use scroll down function and ellements aren't discoverable if they are too far down a page, so switch to a page with less scrolling
//     //Switch to News
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.say("I can access the Categories page");
//     cat_button = await locate('a').withAttr({'href': "/admin/aevi/categories"}).inside(locate('nav'));
//     I.click(cat_button);
//     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/categories");
//     I.see("New Category");
//     I.click({xpath: '/html/body/div/div/section/div/main/div/a'});
//     I.seeInCurrentUrl("https://developer.aevi-test.com/admin/aevi/categories/new");
//     I.fillField("#category_name", "auto_test_category");
//     I.fillField("#category_description", "This is the description for the automated test category *_+12312adfsdfad DFnc/z.x234");
//     I.click("Cancel");

//     I.say("Test that a user can create a category")
//     // Unable to use scroll down function and ellements aren't discoverable if they are too far down a page, so switch to a page with less scrolling
//     //Switch to News
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.say("I can access the Categories page");
//     cat_button = await locate('a').withAttr({'href': "/admin/aevi/categories"}).inside(locate('nav'));
//     I.click(cat_button);
//     I.seeInCurrentUrl("https://developer.aevi-test.com/admin/aevi/categories");
//     I.see("New Category");
//     I.click({xpath: '/html/body/div/div/section/div/main/div/a'});
//     I.seeInCurrentUrl("https://developer.aevi-test.com/admin/aevi/categories/new");
//     I.fillField("#category_name", "auto_test_category");
//     I.fillField("#category_description", "This is the description for the automated test category *_+12312adfsdfad DFnc/z.x234");
//     I.click({"name": "commit"});
//     I.say("Category created successfully");    

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1612");


// Scenario("I can edit a new Category", async (I) => {
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.say("I can access the Categories page");
//     cat_button = await locate('a').withAttr({'href': "/admin/aevi/categories"}).inside(locate('nav'));
//     I.click(cat_button);
//     I.seeInCurrentUrl("https://developer.aevi-test.com/admin/aevi/categories");
//     I.say("I click edit on the Category"); 
//     //Create parameters for the category row to be changed, change "auto_test_category" to the category you wish to change
//     edit_button = await locate('a').withAttr({'class': "o-icon  c-darkLink"}).inside(locate('tr').withAttr({'data-name': 'auto_test_category'}));
//     delete_button = await locate('a').withAttr({'data-confirm': 'Are you sure?'}).inside(locate('tr').withAttr({'data-name': 'auto_test_category'}));
//     I.click(edit_button);
//     I.fillField("#category_name", "auto_test_category_edit");
//     I.fillField("#category_description", "This is the description for the automated test category *_+12312adfsdfad DFnc/z.x234, it has been edited");
//     I.click({"name": "commit"});
//     I.see("Category updated successfully");
//     I.see("auto_test_category_edit");


// }).tag("https://jira.aevi.com/browse/AEVICOM-1608");



// Scenario("Categories can be deleted", async (I) => {

//     I.say(process.env.regular_user);
//     I.click({xpath: '/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[8]/ul/li[2]/a'});
//     I.say("I can access the Categories page");
//     cat_button = await locate('a').withAttr({'href': "/admin/aevi/categories"}).inside(locate('nav'));
//     I.click(cat_button);
//     I.seeInCurrentUrl("https://developer.aevi-test.com/admin/aevi/categories");
//     // Create parameters for the category row to be changed, change "auto_test_category_edit" to the category you wish to change
//     edit_button = await locate('a').withAttr({'class': "o-icon  c-darkLink"}).inside(locate('tr').withAttr({'data-name': 'auto_test_category_edit'}));
//     delete_button = await locate('a').withAttr({'data-confirm': 'Are you sure?'}).inside(locate('tr').withAttr({'data-name': 'auto_test_category_edit'}));
//     I.say("I click delete on the Category");
//     I.click(delete_button);
//     I.acceptPopup();
//     I.dontSee("auto_test_category_edit");

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1609");
