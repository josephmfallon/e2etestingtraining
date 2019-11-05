Feature("Industries").tag("@industries);

Before(login => {
            login('admin'); // login using user session
        });

// Scenario("Template", (I) => {


// }).tag("@name");


Scenario("Create a new Industry", (I) => {
    pause()

}).tag("@https://jira.aevi.com/browse/AEVICOM-1607");


