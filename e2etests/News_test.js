// Feature("News functionality").tag("@News");


// Before(login => {
//             login('admin'); // login using user session
//         });

// Scenario("I can create a new News Article", async (I) => {
//     I.say('I can cancel a new News article part way through creation')
//     //Click on the news tab button
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     I.click('Create News');
//     I.fillField('#news_title', 'automated_news_article');
//     I.fillField('#news_description', 'This is the filler for the automated test news article SADFAWEINOBDBASGRTRLT ****12324_)("!g/.,,LA;LWEQSddtegaasdfeoa');
//     I.click('Cancel');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     I.dontSee('automated_news_article');

//     I.say('I can create a new News article')
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     I.click('Create News');
//     I.fillField('#news_title', 'automated_news_article');
//     I.fillField('#news_description', 'This is the filler for the automated test news article SADFAWEINOBDBASGRTRLT ****12324_)("!g/.,,LA;LWEQSddtegaasdfeoa');
//     I.click('Update News');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     I.see('News was successfully created.');
//     I.see('automated_news_article');
// }).tag("@https://jira.aevi.com/browse/AEVICOM-1590");

// Scenario("The latest News Articles are displayed at the bottom of the Documentation page", async (I) => {
//     I.say('The two articles we will be checking in the developer site are available within the news tab');
//     //Click on the news tab button
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     I.see('Automation_dont_delete');
//     I.see('automated_news_article');
//     I.say('I sign out as an admin user');
//     //click on drop down bar
//     I.click({xpath: '/html/body/header/div/div/section/nav[2]/div/div/a/span[1]'});
//     //I click sign out
//     I.click({xpath: '/html/body/header/div/div/section/nav[2]/div/div/nav/ul/li[3]/a/span'});

//     I.say('I sign in as a developer user');
//     I.amOnPage(process.env.developer_user_site);
//     I.fillField('Email', process.env.regular_user);
//     I.fillField('Password', secret(process.env.regular_user_password));
//     I.click('Log in');
//     I.see('Signed in successfully.');

//     I.say('I Navigate to the documentation page');
//     I.click("Documentation");
//     I.say("I can see the news articles and descriptions at the bottom of the page");
//     I.see('automated_news_article');
//     I.see('This is the filler for the automated test news article SADFAWEINOBDBASGRTRLT ****12324_)("!g/.,,LA;LWEQSddtegaasdfeoa');
//     I.see('News v 1');
//     I.see('latest 1');
// }).tag("@https://jira.aevi.com/browse/AEVICOM-1637");

// Scenario("I can Edit News", async (I) => {
//     I.say('I can cancel a new News article part way through editing it')
//     //Click on the news tab button
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     //Create parameters for the category row to be changed, change "automated_news_article" to the category you wish to change
//     edit_button = await locate('a').withAttr({'class': "o-icon  c-darkLink"}).inside(locate('tr').withAttr({'data-name': 'automated_news_article'}));
//     delete_button = await locate('a').withAttr({'data-confirm': 'Are you sure?'}).inside(locate('tr').withAttr({'data-name': 'automated_news_article'}));


//     I.click(edit_button);
//     I.fillField('#news_title', 'edited_automated_news_article');
//     I.fillField('#news_description', 'This is the filler for the edited automated test news article SADFAWEINOBDBASGRTRLT ****12324_)("!g/.,,LA;LWEQSddtegaasdfeoa');
//     I.click('Cancel');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     I.dontSee('edited_automated_news_article');

//     I.say('I can cancel a new News article part way through editing it')
//     //Click on the news tab button
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');

//     I.click(edit_button);
//     I.fillField('#news_title', 'edited_automated_news_article');
//     I.fillField('#news_description', 'This is the filler for the edited automated test news article SADFAWEINOBDBASGRTRLT ****12324_)("!g/.,,LA;LWEQSddtegaasdfeoa');
//     I.click('Update News');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     // I.see('News was successfully created.');
//     I.see('edited_automated_news_article');

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1591");

// Scenario("News Articles can be deleted", async (I) => {
//     //Click on the news tab button
//     news_button = await locate('a').withAttr({'href': "/admin/news"}).inside(locate('nav'));
//     I.click(news_button);
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');

//     //Create parameters for the category row to be changed, change "edited_automated_news_article" to the category you wish to change
//     edit_button = await locate('a').withAttr({'class': "o-icon  c-darkLink"}).inside(locate('tr').withAttr({'data-name': 'edited_automated_news_article'}));
//     delete_button = await locate('a').withAttr({'data-confirm': 'Are you sure?'}).inside(locate('tr').withAttr({'data-name': 'edited_automated_news_article'}));

//     I.click(delete_button);
//     I.acceptPopup();
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/news');
//     I.see('News was successfully destroyed.');
//     I.dontSee('edited_automated_news_article');
// }).tag("@https://jira.aevi.com/browse/AEVICOM-1593");