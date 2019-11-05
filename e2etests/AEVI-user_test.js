// Feature('AEVI Admin User Management').tag("@aevi_user");

// Scenario("Template", (I) => {


// }).tag("@name");


// Scenario("Validate Admin User login" , (I) => {
//     I.amOnPage(process.env.aevi_admin_site);
//     I.fillField('Email', process.env.aevi_user);
//     I.fillField('Password', secret(process.env.aevi_password));
//     I.click('Log in');
//     I.say("I can login succesfully as an AEVI admin");
//     I.see('Signed in successfully.');
//  }).tag("@name");

// Scenario("Only AEVI admin users can access the admin page", (I) => {
//     I.say("If a user is on the Admin user login screen or tries to access the admin site without being signed in they will see the login screen")
//     I.amOnPage("https://developer.aevi-test.com/admin/sign_in");
//     I.see("Log in to your account");
//     I.amOnPage("https://developer.aevi-test.com/admin/applications");
//     I.see("Log in to your account");

//     I.say("I can enter the email and password");
//     I.fillField('Email', "test.email@filler.com");
//     I.seeInField("Email", "test.email@filler.com");
//     I.fillField("Password", "1234abc*");
//     I.seeInField("Password", "1234abc*");
//     //could add screenshot test here to verify if password is masked in the UI
//     I.say("If I try to login with an invalid email or Password login fails")
//     //Check with Invalid email and password
//     I.click('Log in');
//     I.see('Invalid email or password');
//     //Check with invalid email only
//     I.fillField('Email', "test.email@filler.com");
//     I.fillField('Password', secret(process.env.aevi_password));
//     I.click('Log in');
//     I.see('Invalid email or password');
//     //Check with invalid password only
//     I.fillField('Email', process.env.aevi_user);
//     I.fillField("Password", "1234abc*");
//     I.click('Log in');
//     I.see('Invalid email or password');
//     //Validate that you can't login as an admin with a regular user account
//     I.say("If I try to login as an AEVI admin with a regular user account login fails");
//     I.fillField('Email', process.env.regular_user);
//     I.fillField("Password", secret(process.env.regular_user_password));
//     I.click('Log in');
//     I.see('Invalid email or password');
// }).tag("@https://jira.aevi.com/browse/AEVICOM-1685");

// Scenario("Logged in as an AEVI admin User", () =>{
//     Before(login => {
//         login('admin'); // login using user session
//     });
    
//     Scenario("New AEVI User invites can be sent", (I) => {
        
//         I.say("The AEVI Admin User screen is accesible");
//         I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
//         I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users");

//         I.say("The Invite New user screen is accecible");
//         I.click("Invite ");
//         I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users#invite_new_user");

//         I.say("I enter a valid email I can invite a new AEVI user");
//         I.fillField("#admin_user_email", process.env.test_user);
//         I.click("Send an invitation");
//         I.see("An invitation email has been sent");

//         //to be included as part of an "After" method. Ensure noreply@aevi is marked as not junk in your email & focussed email is turned off
//         I.say("I can see the email has arrived within the recipients inbox");
//         I.amOnPage("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1570801229&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dec427dd5-d3c5-c5e8-29d8-ad09dc16bb11&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
//         I.fillField("loginfmt", process.env.test_user);
//         I.click("Next");
//         I.wait(2);
//         I.fillField('passwd', secret(process.env.test_user_password));
//         I.wait(2);
//         I.click("Sign in");
//         //I.wait(2);
//         //If other tab present in outlook use the following two commands
//         //I.say("Click the other tab")
//         //I.click("#Pivot33-Tab1");
//         I.wait(60);
//         I.see("Invitation instructions");
//         I.say("Move invitation to 'completed' folder so it doesn't impact future tests");
//         I.click({xpath: '/html/body/div[2]/div/div[2]/div/div[1]/div[3]/div[2]/div/div[1]/div[1]/div/div[1]'});
//         I.click({"name":"Move to"});
//         I.wait(2);
//         I.say("I select the Completed_tests folder")
//         I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/ul/li/div/div[4]/div'});
//         I.dontSee("Invitation instructions")
//     }).tag("@https://jira.aevi.com/browse/AEVICOM-1580");

    // Scenario("Pending AEVI User Invitations can be resent", async (I) => {
    //     I.amOnPage("https://developer.aevi-test.com/admin/aevi/users");
    //     I.say("Validate a pending user tab is interactable");
    //     I.see("Pending");
    //     I.click("Pending");
    //     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users#pending_invites");

    //     //Define row specific variables, to choose a specific row to be delete edit the "data-email" field in row_id & edit_button
    //     row_id= await I.grabAttributeFrom(locate('tr').withAttr({'data-email': process.env.test_user}).find("td").withAttr({'data-title': "Actions"}).find("a"), 'href');  
    //     sliced_row_id = row_id.toString().slice(49);
    //     resend_button = await locate('a').withAttr({class: "js-tab o-icon c-darkLink"}).inside(locate('tr').withAttr({'data-email': process.env.test_user}));
    //     I.click(resend_button);
    //     I.see("Invite resent");

//         I.say("The recipient can see the resent invitation has arrived");
//         I.amOnPage("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1570801229&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dec427dd5-d3c5-c5e8-29d8-ad09dc16bb11&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
//         I.fillField("loginfmt", process.env.test_user);
//         I.click("Next");
//         I.wait(2);
//         I.fillField('passwd', secret(process.env.test_user_password));
//         I.wait(2);
//         I.click("Sign in");
//         //I.wait(2);
//         //If other tab present in outlook use the following two commands
//         //I.say("Click the other tab")
//         //I.click("#Pivot33-Tab1");
//         I.wait(60);
//         I.see("Invitation instructions");
//         I.say("Move invitation to 'completed' folder so it doesn't impact future tests");
//         I.click({xpath: '/html/body/div[2]/div/div[2]/div/div[1]/div[3]/div[2]/div/div[1]/div[1]/div/div[1]'});
//         I.click({"name":"Move to"});
//         I.say("I select the Completed_tests folder");
//         I.waitForElement({xpath: '/html/body/div[7]/div/div/div/div/div/div/ul/li/div/div[4]/div'}, 10);
//         I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/ul/li/div/div[4]/div'});
//         I.dontSee("Invitation instructions");
        
    // }).tag("@https://jira.aevi.com/browse/AEVICOM-1586");

    // Scenario("Pending AEVI User Invites can be deleted", async (I) => {
    //     I.say("The AEVI Admin User screen is accesible");
    //     I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
    //     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users");
    //     I.say("Validate a pending user tab is interactable");
    //     I.see("Pending");
    //     I.click("Pending");
    //     I.say("I can view the newly invited user within the pending invitee list");
    //     I.see(process.env.test_user);

    //     //Define row specific variables, to choose a specific row to be delete edit the "data-email" field in row_id & edit_button
    //     row_id= await I.grabAttributeFrom(locate('tr').withAttr({'data-email': process.env.test_user}).find("td").withAttr({'data-title': "Actions"}).find("a"), 'href');  
    //     sliced_row_id = row_id.toString().slice(49);
    //     console.log(sliced_row_id);
    //     delete_button = await locate('a').withAttr({'href': "/admin/aevi/users/" + sliced_row_id}).inside(locate('tr').withAttr({'data-email': process.env.test_user}));
    //     I.click(delete_button);
    //     I.seeInPopup("Are you sure?");
    //     I.acceptPopup();
        
    // }).tag("@https://jira.aevi.com/browse/AEVICOM-1587");

// Scenario("New AEVI User can accept their invitation", async (I) => {

//         // Send a brand new invitation
//         I.say("The AEVI Admin User screen is accesible");
//         I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
//         I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users");

//         I.say("The Invite New user screen is accecible");
//         I.click("Invite ");
//         I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users#invite_new_user");

//         I.say("I enter a valid email I can invite a new AEVI user");
//         I.fillField("#admin_user_email", process.env.test_user);
//         I.click("Send an invitation");
//         I.see("An invitation email has been sent");
//         pause();
//         I.say("I log out to avoid sign in conflicts");
//         I.click({xpath:  '/html/body/header/div/div/section/nav[2]/div/div/a'});
//         I.click("Sign out");

//         // Log into to test email
//         I.say("I can see the email has arrived within the recipients inbox");
//         I.amOnPage("https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1570801229&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dec427dd5-d3c5-c5e8-29d8-ad09dc16bb11&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015");
//         I.fillField("loginfmt", process.env.test_user);
//         I.click("Next");
//         I.wait(2);
//         I.fillField('passwd', secret(process.env.test_user_password));
//         I.wait(2);
//         I.click("Sign in");
//         //I.wait(2);
//         //If other tab present in outlook use the following two commands
//         //I.say("Click the other tab")
//         //I.click("#Pivot33-Tab1");
//         I.wait(20);
//         I.see("Invitation instructions");
//         I.pressKey("ArrowUp");
//         accept_invite= await I.grabAttributeFrom(locate('a').withAttr({'data-auth': "NotApplicable"}).inside(locate('tbody')) , 'href');
//         url = accept_invite.toString();
//         console.log(url);
//         I.amOnPage(url);
//         I.fillField({id: 'admin_user_first_name'}, "automated-test-user");
//         I.fillField({id: "admin_user_last_name"}, "automated-test-last-name");
//         I.fillField({id: "admin_user_password"}, secret(process.env.test_user_password));
//         I.fillField({id: "admin_user_password_confirmation"}, secret(process.env.test_user_password));
//         I.click("Set my password");

// }).tag("@https://jira.aevi.com/browse/AEVICOM-1582");

// Scenario("AEVI User Details can be edited", async (I) => {
    

    //     I.say("The AEVI Admin User screen is accesible");
    //     I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
    //     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users");
    
    //     //Define row specific variables, to choose a specific row to be delete edit the "data-email" field in row_id & edit_button
    //     row_id= await I.grabAttributeFrom(locate('tr').withAttr({'data-email': process.env.test_user}).find("td").withAttr({'data-title': "Actions"}).find("a"), 'href');   
    //     sliced_row_id = row_id.toString().slice(54);
    //     first_name = "#first_name_" + sliced_row_id
    //     last_name = "#last_name_" + sliced_row_id
    //     email = "#email_" + sliced_row_id
    //     super_admin = "#super_admin_" + sliced_row_id
    //     user = '#user_' + sliced_row_id
    //     uservan = 'user_' + sliced_row_id
    //     edit_button = await locate('a').withAttr({'href': user}).inside(locate('tr').withAttr({'data-email': process.env.test_user}));
    //     cancel_button = await locate('a').withAttr({'href': user}).inside(locate('tr').withAttr({id: uservan}));
    //     //delete button inside the edit tab
    //     delete_button = await locate('a').withAttr({'href': "/admin/aevi/users/" +uservan}).inside(locate('tr').withAttr({id: uservan}));
    //     update_button = await locate('input').withAttr({'value':'Update Admin user'}).inside(locate('tr').withAttr({id: uservan}));
        
    //     I.say("I can cancel an edit of a user");
    //     I.click(edit_button);
    //     I.say("I edit first name")
    //     I.fillField(first_name, "edited_automated-test-user");
    //     I.say("I edit last name")
    //     I.fillField(last_name, "edited_automated-test-last-name");
    //     I.fillField(email, "edited_automated-test-email@test.com");
    //     I.say("Give user super admin permisions")
    //     I.checkOption(super_admin);
    //     I.seeCheckboxIsChecked(super_admin);
    //     I.click(cancel_button)
    //     I.dontSee("edited_automated-test-user");
    
    //     I.say("I can edit a user");
    //     I.click(edit_button);
    //     I.say("I edit first name")
    //     I.fillField(first_name, "edited_automated-test-user");
    //     I.say("I edit last name")
    //     I.fillField(last_name, "edited_automated-test-last-name");
    //     I.fillField(email, "edited_automated-test-email@test.com");
    //     I.say("Give user super admin permisions")
    //     I.checkOption(super_admin);
    //     I.seeCheckboxIsChecked(super_admin);
    //     I.click(update_button);
    //     I.see("edited_automated-test-user");
        
    // }).tag("@https://jira.aevi.com/browse/AEVICOM-1583");
    
    
    // Scenario("AEVI Users can be deleted", async (I) => {
    
    
    //     I.say("The AEVI Admin User screen is accesible");
    //     I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
    //     I.seeCurrentUrlEquals("https://developer.aevi-test.com/admin/aevi/users");
        
    //      //Define row specific variables, to choose a specific row to be delete edit the "data-email" field in row_id & delete_button
    //     row_id= await I.grabAttributeFrom(locate('tr').withAttr({'data-email': "edited_automated-test-email@test.com"}).find("td").withAttr({'data-title': "Actions"}).find("a"), 'href');   
    //     sliced_row_id = row_id.toString().slice(54);
    //     delete_button = await locate('a').withAttr({'href': "/admin/aevi/users/" +sliced_row_id}).inside(locate('tr').withAttr({'data-email': "edited_automated-test-email@test.com"}));
    //     I.click(delete_button);
    //     I.seeInPopup("Are you sure?");
    //     I.acceptPopup();
    //     I.dontSee("edited_automated-test-email@test.com");
        
    // }).tag("@https://jira.aevi.com/browse/AEVICOM-1584");



// });