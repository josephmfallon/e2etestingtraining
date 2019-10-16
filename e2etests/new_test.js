// Feature("Test screenshot comparision functionality");


// Before(login => {
//   login('admin'); // login using user session
// });


// Scenario("Compare Dev-test login page with screencap", async (I) => {
//     I.amOnPage("https://developer.aevi-test.com/admin/applications");
//     I.saveScreenshot("test01.png");
//     I.seeVisualDiff("test01.PNG", {tolerance: 2, prepareBaseImage:false});



// });

// Scenario("fail test", async (I) => {
//   I.amOnPage("https://developer.aevi-test.com/admin/applications");
//   I.click("Dashboard");
//   I.saveScreenshot("test01.png");
//   I.seeVisualDiff("test01.PNG", {tolerance: 2, prepareBaseImage:false});

// });