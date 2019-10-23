Feature('AEVI Admin User Management').tag("@aevi_user");

// Template don't uncomment
// Scenario("Only Admin User's can access the Admin Page", (I) => {


// });


// Scenario("Validate Admin User login" , (I) => {
//     I.amOnPage(process.env.aevi_admin_site);
//     I.fillField('Email', process.env.aevi_user);
//     I.fillField('Password', secret(process.env.aevi_password));
//     I.click('Log in');
//     I.say("I can login succesfully as an AEVI admin");
//     I.see('Signed in successfully.');
//  });

//  //Following test deals with https://jira.aevi.com/browse/AEVICOM-1685
// Scenario("Only Admin User's can access the Admin Page", (I) => {
//     I.say("If a user is on the Admin user login screen or tries to access the admin site without being signed in they will see the login screen")
//     I.amOnPage("https://developer.aevi-test.com/admin/sign_in");
//     // pause()
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
//     //Test to validate that you can't login as an admin with a regular user account
//     I.say("If I try to login as an AEVI admin with a regular user account login fails");
//     I.fillField('Email', process.env.regular_user);
//     I.fillField("Password", secret(process.env.regular_user_password));
//     I.click('Log in');
//     I.see('Invalid email or password');
// });

// Scenario("Logged in as an AEVI admin User ", () =>{
//     Before(login => {
//         login('admin'); // login using user session
//     });
    
//     Scenario("New AEVI users can be invited to the portal ", (I) => {
        
//         I.say("The AEVI Admin User screen is accesible");
//         I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
//         I.amOnPage("https://developer.aevi-test.com/admin/aevi/users");

//         I.say("The Invite New user screen is accecible");
//         I.click("Invite ");
//         I.amOnPage("https://developer.aevi-test.com/admin/aevi/users#invite_new_user");

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
//         I.wait(30);
//         I.see("Invitation instructions");
//         I.say("Move invitation to 'completed' folder so it doesn't impact future tests");
//         I.click({xpath: '/html/body/div[2]/div/div[2]/div/div[1]/div[3]/div[2]/div/div[1]/div[1]/div/div[1]'});
//         I.click({"name":"Move to"});
//         I.wait(2);
//         I.say("I select the Completed_tests folder")
//         I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/ul/li/div/div[4]/div'});
//         I.dontSee("Invitation instructions")
//     });

//     Scenario("Pending Invitations can be resent", (I) => {
//         I.amOnPage("https://developer.aevi-test.com/admin/aevi/users");
//         I.say("Validate a pending user tab is interactable");
//         I.see("Pending");
//         I.click("Pending");
//         I.click("Resend Invite");
//         I.see("Invite resent");

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
//         I.wait(30);
//         I.see("Invitation instructions");
//         I.say("Move invitation to 'completed' folder so it doesn't impact future tests");
//         I.click({xpath: '/html/body/div[2]/div/div[2]/div/div[1]/div[3]/div[2]/div/div[1]/div[1]/div/div[1]'});
//         I.click({"name":"Move to"});
//         I.wait(2);
//         I.say("I select the Completed_tests folder")
//         I.click({xpath: '/html/body/div[7]/div/div/div/div/div/div/ul/li/div/div[4]/div'});
//         I.dontSee("Invitation instructions");
        
//     });

//     Scenario("Pending user invitations are viewable and can be deleted", (I) => {
//         I.say("The AEVI Admin User screen is accesible");
//         I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
//         I.amOnPage("https://developer.aevi-test.com/admin/aevi/users");
//         I.say("Validate a pending user tab is interactable");
//         I.see("Pending");
//         I.click("Pending");
//         I.say("I can view the newly invited user within the pending invitee list");
//         I.see(process.env.test_user);
//         // Delete the entry from the first row, assuming there is only one entry
//         I.click({xpath: '/html/body/div/div/section/div/main/section/section[2]/div/section/table/tbody/tr/td[5]/a'});
//         //I.click({xpath: '/html/body/div/div/section[2]/div/main/section/section[2]/div/section/table/tbody/tr[1]/td[5]/a'}); deletes first row is more than one entry
//         I.say("Verify pop up appears");
//         I.seeInPopup("Are you sure?");
//         I.acceptPopup();
        
//     });
// });

Before(login => {
            login('admin'); // login using user session
        });

Scenario("AEVI User details can be edited", (I) => {
    

    I.say("The AEVI Admin User screen is accesible");
    I.click({xpath: "/html/body/div/div/section[2]/div/aside/nav/div[2]/nav/ul/li[7]/ul/li[1]/a"});
    I.amOnPage("https://developer.aevi-test.com/admin/aevi/users");

    row_id= Promise.resolve(I.grabAttributeFrom(locate('tr').withAttr({'data-email': "automated-test-email@test.com"}).find("td").withAttr({'data-title': "Actions"}).find("a"), 'href'));
    
    {
    let row = row_id.then(function(value) {
        console.log('inside the declaration', value);
        return value;
        // expected output: 123
      });
      console.log('outside the declaration', row);

    }

    // I.say(row_id.then(function(value) { console.log(value) }));
    // sliced_row_id = row_id.toString().slice(54);
    // first_name = "#first_name_" + sliced_row_id
    // last_name = "#last_name_" + sliced_row_id
    // email = "#email_" + sliced_row_id

    I.say("I click edit on the 6th row")
    I.click({xpath: '/html/body/div/div/section/div/main/section/section[1]/div/section/table/tbody/tr[11]/td[4]/a'});
    //ID syntax is #id_name_user-defined-id the user id will be specific to the row instance
    // I.say("I edit first name")
    // I.fillField("#first_name_be65b877-9b01-4e96-a747-a190ae5bef52", "automated-test-user");
    // I.say("I edit last name")
    // I.fillField("#last_name_be65b877-9b01-4e96-a747-a190ae5bef52", "automated-test-last-name");
    // I.fillField("#email_be65b877-9b01-4e96-a747-a190ae5bef52", "automated-test-email@test.com");
    // I.say("Give user all permisions")
    pause();
    I.click({xpath: '/html/body/div/div/section/div/main/section/section[1]/div/section/table/tbody/tr[12]/td/form/div[6]/input'});
    
});


// To solve: https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val

//identiying how to get "dynamic ID for users". 1. how to define variables in codeceptjs. 2. concatenate variable in JS. 3. find xpath of userid of instance 4. document which row of xpath can be customisable to point to different data rows
//full xpath to row:var row_id= locate('/html/body/div/div/section/div/main/section/section[1]/div/section/table/tbody/tr[1]/td[4]').find("a").find("href")
//

// Scenario("AEVI Users can be Deleted", (I) => {
// pause();

// });

//Identify table row with xpath (row of table where data-email = "xxx@.com" inside that define what the children's xpath is. So within the row labelled as x-email click the edit button)


