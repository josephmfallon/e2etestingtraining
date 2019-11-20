// Feature("Organisations").tag("@Organisations");


// Before(login => {
//             login('admin'); // login using user session
//         });

// Scenario("Organisations can be created as an AEVI Admin", (I) => {
    
//     I.say('I can access the Organisations screen');
//     I.click('Organisations');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/organisations');
//     I.say('I can cancel creating a new organisation part way through');
//     I.see('New Organisation');
//     I.click('New Organisation');
//     I.fillField("#organisation_name", "auto_test_Organisation");
//     I.fillField("#organisation_description", "This is the description for the automated test Organisation *_+12312adfsdfad DFnc/z.x234");
//     I.fillField("#organisation_website", "https://www.auto-test.com");
//     I.fillField("#organisation_duns_number", "89541323548735217");
//     I.attachFile("#organisation_logo", 'inputs/logo.jpg');
//     I.checkOption({xpath: '/html/body/div/div/section/div/main/form/section/div[2]/div/div[6]/input'});
//     I.click("Cancel");

//     I.say('I can create a new organisation');
//     I.see('New Organisation');
//     I.click('New Organisation');
//     I.fillField("#organisation_name", "auto_test_Organisation");
//     I.fillField("#organisation_description", "This is the description for the automated test Organisation *_+12312adfsdfad DFnc/z.x234");
//     I.fillField("#organisation_website", "https://www.auto-test.com");
//     I.fillField("#organisation_duns_number", "89541323548735217");
//     I.attachFile("#organisation_logo", 'inputs/logo.jpg');
//     I.checkOption({xpath: '/html/body/div/div/section/div/main/form/section/div[2]/div/div[6]/input'});
//     I.click({"name": "button"});


// }).tag("@https://jira.aevi.com/browse/AEVICOM-1681");

// Scenario("Organisation Details can be edited as an AEVI User", async (I) => {
//     I.say('I can access the Organisations screen');
//     I.click('Organisations');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/organisations');
//     href= await I.grabAttributeFrom(locate('tr').withAttr({'data-name': "auto_test_Organisation"}).find("td").at(4).find("a"), 'href');  
//     edit_button= await locate('tr').withAttr({'data-name': "auto_test_Organisation"}).find("td").at(4).find("a");  
//     I.say('I can edit organisation overview')
//     I.click(edit_button);
//     I.fillField("#organisation_name", "auto_test_Organisation_edited");
//     I.fillField("#organisation_description", "This is the description for the automated test Organisation *_+12312adfsdfad DFnc/z.x234 edited");
//     I.fillField("#organisation_website", "https://www.auto-test.com/edited");
//     I.fillField("#organisation_duns_number", "89541323548735217edited");
//     I.attachFile("#organisation_logo", 'inputs/logo.jpg');
    
//     // Check box for document access "Albert"
//     I.checkOption("#organisation_documentation_group_organisations_attributes_5_documentation_group_id");
//     I.say("I can click 'Update Organisation'")
//     I.click({"name": "button"});
//     pause()
//     I.see("Organisation was successfully updated.");
//     I.see("auto_test_Organisation_edited"); 
    
    
//     I.say('I can edit organisation Details');
//     I.click('Details');
//     I.fillField("#organisation_contact_1_name", "auto_test_contact_1");
//     I.fillField("#organisation_contact_1_email", "auto_test_email_1");
//     I.fillField("#organisation_contact_1_role", "auto_test_role_1");
//     I.fillField("#organisation_contact_2_name", "auto_test_contact_1");
//     I.fillField("#organisation_contact_2_email", "auto_test_email_2");
//     I.fillField("#organisation_contact_2_role", "auto_test_role_2");
//     I.fillField("#organisation_head_office_address", "auto_test_address");
//     I.fillField("#organisation_languages", "auto_test_language_1");
//     I.fillField("#organisation_other_countries_with_physical_offices", "auto_test_offices");
//     I.fillField("#organisation_support_by_country", "auto_test_country_support");
//     I.fillField("#organisation_countries_of_interest", "auto_test_countries_of_interest");
//     I.fillField("#organisation_associated_b2c_apps", "auto_test_b2c_apps");
//     I.fillField("#organisation_twitter", "auto_test_twitter");
//     I.fillField("#organisation_facebook", "auto_test_facebook");
//     I.fillField("#organisation_linkedin", "auto_test_linkedin");
//     I.fillField("#organisation_video_1", "auto_test_vid1");
//     I.fillField("#organisation_video_2", "auto_test_vid2");
//     I.fillField("#organisation_video_3", "auto_test_vid3");
//     I.fillField("#organisation_eula", "auto_test_eula");
//     I.fillField("#organisation_privacy_policy", "auto_test_privacy_policy");
//     I.fillField("#organisation_terms_and_conditions", "auto_test_t&cs");
//     I.fillField("#organisation_gdpr", "auto_test_GDPR");
//     I.fillField("#organisation_other_terms", "auto_test_other");
//     I.fillField("#organisation_country_specific_regulation_compliance", "auto_test_regulatory_compliance");
//     I.say("I can click 'Update Organisation'");
//     I.click({"name": "button"});


// }).tag("@https://jira.aevi.com/browse/AEVICOM-1682");




// Scenario("Organisations can be deleted", async (I) => {
//     I.say('I can access the Organisations screen');
//     I.click('Organisations');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/organisations');
//     edit_button = await locate('a').withAttr({'class': "o-icon  c-darkLink"}).inside(locate('tr').withAttr({'data-name': 'auto_test_organisation_edited'}));
//     delete_button = await locate('a').withAttr({'data-confirm': 'Are you sure?'}).inside(locate('tr').withAttr({'data-name': 'auto_test_organisation_edited'}));
//     I.say("I click delete on the Industry");
//     I.click(delete_button);
//     I.acceptPopup();
//     I.dontSee("auto_test_organisation_edited");

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1683");

// Scenario("I can assign an Organisation Document access as an AEVI User", async (I) => {
//     I.say('I can access the Organisations screen');
//     I.click('Organisations');
//     I.seeInCurrentUrl('https://developer.aevi-test.com/admin/organisations');
//     href= await I.grabAttributeFrom(locate('tr').withAttr({'data-name': "AEVI"}).find("td").at(4).find("a"), 'href');  
//     edit_button= await locate('tr').withAttr({'data-name': "AEVI"}).find("td").at(4).find("a");  
//     I.say('I can edit organisation overview');
//     I.click(edit_button);
//     // Check box for document access "Albert"
//     I.checkOption({xpath: '/html/body/div/div/section/div/main/section/form/section[1]/div[2]/div/div[6]/input[2]'});
//     I.say("I can click 'Update Organisation'")
//     I.click({"name": "button"});
//     I.see("Organisation was successfully updated.");
//     I.uncheckOption("#organisation_documentation_group_organisations_attributes_5_documentation_group_id");
//     I.checkOption("#organisation_documentation_group_organisations_attributes_5_documentation_group_id");

//     I.say("I sign out as an AEVI User");
//     I.say("I log out to avoid sign in conflicts");
//     I.click({xpath:  '/html/body/header/div/div/section/nav[2]/div/div/a'});
//     I.click("Sign out");

//     I.say('I log in as a developer user');
//     I.amOnPage(process.env.developer_user_site);
//     I.fillField('Email', process.env.regular_user);
//     I.fillField('Password', secret(process.env.regular_user_password));
//     I.click('Log in');
//     I.say("I can login succesfully as an regular user");
//     I.see('Signed in successfully.');

    
//     I.say("I can access the added documentation");
//     I.click("Documentation");
//     I.see("Albert");
//     pause()
//     I.say("I can view the guide page")
//     I.click({xpath: '/html/body/div[1]/div/section/div/main/section[1]/div/article[6]/nav/a[1]/figure/figcaption'});
//     I.seeInCurrentUrl("https://developer.aevi-test.com/documentation/albert/guides/get-started");
//     I.click("Documentation");
//     I.say("I can view the downloads page")
//     I.click({xpath: '/html/body/div/div/section/div/main/section[1]/div/article[6]/nav/a[2]'});
//     I.seeInCurrentUrl("https://developer.aevi-test.com/documentation/albert/downloads/downloads");
//     I.click("Documentation");
//     I.say("I can view the FAQ page")
//     I.click({xpath: '/html/body/div/div/section/div/main/section[1]/div/article[6]/nav/a[3]/figure/figcaption'});
//     I.seeInCurrentUrl("https://developer.aevi-test.com/documentation/albert/faqs");
    

//     pause()

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1684");

// Scenario("Template", (I) => {


// }).tag("@name");
