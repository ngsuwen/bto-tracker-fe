# BTOtracker

The BTOtracker website can be accessed [here](https://bto-tracker.herokuapp.com/).

## Description

One pain point many BTO buyers face is the flat selection process. HDB will only officially inform couples about their flat selection date 2 weeks prior to the actual date. Before that, it is difficult for couples to keep track of the current queue situation and the units available for selection. To help couples ease their flat selection process, BTOtracker aims to crowdsource data from the public and present them in an easy to understand manner. With this, couples can now gauge their selection date even before the official letter from HDB, as well as keep track of the units left for selection.

## User Stories
### Public Users (BTO buyers)

- Users are able to view the list of ongoing and upcoming projects
- Users are able to view project information. Users can also add the projects to their watchlist. 
- Users are able to track the current queue situation and the units available for selection. There are 2 ways users can navigate to the tracker page. 
- Users can submit their appointment date and queue number.
- If users spot a mistake in availability of units, they can submit a feedback form. 

### Admin Users (Also BTO buyers as prerequisite)

- Users can voluteer to be an admin or data scraper for a specific project. Admins are required to validate queue number submissions. Data scrapers can help to keep track and update availability of units. 
- Once the application is accepted by the administrators, users will receive an email with their username and password. 
- Users can change their password upon logging in for the first time. 
- Admin users will receive messages relating to queue number submission. Users can check the image validation to determine if the submission is reliable. If it is reliable, users can click on the ✓, else, users can click on the ✕. There is also an overview where users can view the current queue number tracker. Users can delete an entry (for example, when the selection date is over), or change the status of entry from validated to non-validated, or vice versa. 
- Admin users will receive messages relating to queue number submission. Users can check the image validation to determine if the submission is reliable. If it is reliable, users can click on the ✓, else, users can click on the ✕. There is also an overview where users can view the current queue number tracker. Users can delete an entry (for example, when the selection date is over), or change the status of entry from validated to non-validated, or vice versa. 
- Data scrapers will receive messages submitted via the feedback form. Users can check the image validation to determine if the submission is reliable. If it is reliable, users can click on the ✓, else, users can click on the ✕. There is also an overview where users can view the units and their availability. Users can change the status of the units from available to taken, or vice versa. 

### Super Users (Administrators)

- Super users will receive messages relating to account creations and deletions. Super users can check the image validation to determine if the application is legitimise. If it is, super users can click on the ✓ and enter the username and password, which will be sent to the submitted email address. Else, super users can click on the ✕ to delete the application. There is also an overview where super users can view the current accounts. Usernames are controlled by super users for easy tracking. Super users can also delete accounts from the overview (for example, when selection is done)
- Super users are also in charge of projects and units creation. They can use the various forms to create projects and units. 
- When admin users delete their accounts, super users will also receive a message to notify them about it. 

## Tech Stack

Front-End:

- React

Back-End [Repo](https://github.com/ngsuwen/bto-tracker-be).

- PostgreSQL
- Express
- Nodejs
- Sequelize

## Ways to improve

- More information for the public would be really useful, eg price of unit. 
