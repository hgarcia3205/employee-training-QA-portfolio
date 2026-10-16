# Playwright Automated UI Testing

## AT-001 - Valid OrangeHRM Login

Objective:
Verify that a valid administrator can successfully log in to OrangeHRM.

Steps:
- Navigate to the OrangeHRM login page.
- Enter valid username.
- Enter valid password.
- Click Login.
- Verify that the user reaches the dashboard.

Expected Result:
- Authentication succeeds.
- Dashboard loads.

Status:
PASS

## AT-002 - Invalid OrangeHRM Login

Objective:
Verify that OrangeHRM rejects an invalid password.

Steps:
- Navigate to the OrangeHRM login page.
- Enter a valid username.
- Enter an invalid password.
- Click Login.
- Verify that "Invalid credentials" is displayed.
- Verify that the user remains on the login page.

Expected Result:
- Authentication is rejected.
- Invalid credentials message is displayed.
- User remains on the login page.

Actual Result:
- Invalid credentials were rejected.
- "Invalid credentials" was displayed.
- User remained on the login page.
- Automated test passed in Chromium.

Status:
PASS
## AT-003 - Create and Search Employee

Objective:
Verify that an authenticated administrator can create an employee and then locate that employee through the OrangeHRM employee search workflow.

Steps:
- Navigate to OrangeHRM.
- Log in with valid administrator credentials.
- Open PIM.
- Add a new employee.
- Save the employee record.
- Return to Employee List.
- Search for the newly created employee.
- Verify that the matching employee appears in the results.

Expected Result:
- Employee creation succeeds.
- Employee search returns the newly created employee.

Actual Result:
- Employee record was created successfully.
- Search returned the newly created employee.
- Automated test passed in Chromium.

Status:
PASS