# Getting Started with User Courses App

## Prequisite
- Node 19.7 or higher
- npm 9.5 or higher

## Setup
1. git clone {repo-url}
2. cd users-courses
3. npm install
4. npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Walkthrough Video


## Tech Stack
1. React JS
2. Redux
3. React Router
4. Bootstrap

## Features Added

1. Display Users Listing in a Table:
    - Users' information is presented in a table format.
    - Each user entry includes options to "Edit User" and "View Courses".

2. Course Details for Users:
    - Clicking on "View Courses" redirects users to a dedicated page showing the courses associated with the selected user.

3. Edit User Information:
    - Users can edit their information via a modal window.
    - After saving the changes, the updated user details are reflected in the users' listing.

## Additional Features

1. Loading Spinner:
    - Implemented a loading spinner to indicate that data is being fetched from APIs.
    - Enhances user experience by providing visual feedback during data retrieval.

2. Sorting by Name:
    - Added a sorting feature on the "Name" field in the user listing.
    - Clicking the arrow up or down sorts the user listing accordingly, enhancing usability.

3. Error Handling:
    - Redirected to a "Not Found" page for any incorrect URLs.

4. User Feedback for Empty Courses:
    - Displayed a message to the user if no courses are found for a particular user.

## ToDo
1. Additional filters or sort can be added on the fields
