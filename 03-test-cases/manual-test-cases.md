# Manual Test Cases

## Project
Employee Training Management System

## Test Environment
- Operating System: Windows 11
- Browser: Microsoft Edge / Google Chrome
- Test Type: Manual Functional Testing

---

## TC-001 — Valid User Login

**Requirement:** REQ-001

**Objective:** Verify that an authorized user can log in with valid credentials.

**Preconditions:**
- User account exists.
- User is logged out.

**Test Steps:**
1. Navigate to the login page.
2. Enter a valid username.
3. Enter a valid password.
4. Select the Login button.

**Expected Result:**
- User is successfully authenticated.
- Dashboard is displayed.
- No error message appears.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-002 — Invalid Password

**Requirement:** REQ-002

**Objective:** Verify that the system rejects a valid username with an incorrect password.

**Preconditions:**
- User account exists.

**Test Steps:**
1. Navigate to the login page.
2. Enter a valid username.
3. Enter an invalid password.
4. Select Login.

**Expected Result:**
- Authentication is rejected.
- An appropriate error message is displayed.
- User remains on the login page.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-003 — Blank Username

**Requirement:** REQ-002

**Objective:** Verify system behavior when the username field is blank.

**Test Steps:**
1. Navigate to the login page.
2. Leave the username field blank.
3. Enter a valid password.
4. Select Login.

**Expected Result:**
- Login is rejected.
- Validation message is displayed.
- User remains unauthenticated.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-004 — Blank Password

**Requirement:** REQ-002

**Objective:** Verify system behavior when the password field is blank.

**Test Steps:**
1. Enter a valid username.
2. Leave password blank.
3. Select Login.

**Expected Result:**
- Login is rejected.
- Validation message is displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-005 — Blank Username and Password

**Requirement:** REQ-002

**Objective:** Verify authentication behavior when both fields are blank.

**Test Steps:**
1. Leave username blank.
2. Leave password blank.
3. Select Login.

**Expected Result:**
- Login is rejected.
- Required-field validation is displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-006 — Create Employee With Valid Data

**Requirement:** REQ-003

**Objective:** Verify that an authorized user can create an employee.

**Preconditions:**
- User is authenticated.

**Test Steps:**
1. Navigate to Create Employee.
2. Enter valid first name.
3. Enter valid last name.
4. Enter all other required information.
5. Select Save.

**Expected Result:**
- Employee record is created.
- Confirmation is displayed.
- Employee appears in the employee list.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-007 — Create Employee Without First Name

**Requirement:** REQ-004

**Objective:** Verify that first name is required.

**Test Steps:**
1. Navigate to Create Employee.
2. Leave first name blank.
3. Enter a valid last name.
4. Complete other required fields.
5. Select Save.

**Expected Result:**
- Record is not created.
- First-name validation message is displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-008 — Create Employee Without Last Name

**Requirement:** REQ-004

**Objective:** Verify that last name is required.

**Test Steps:**
1. Navigate to Create Employee.
2. Enter a valid first name.
3. Leave last name blank.
4. Complete other required fields.
5. Select Save.

**Expected Result:**
- Record is not created.
- Last-name validation message is displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-009 — Create Employee With Invalid Data

**Requirement:** REQ-003

**Objective:** Verify system handling of invalid employee data.

**Test Steps:**
1. Navigate to Create Employee.
2. Enter invalid or malformed information in a validated field.
3. Complete required fields.
4. Select Save.

**Expected Result:**
- Invalid input is rejected.
- Appropriate validation message is displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-010 — Create Duplicate Employee

**Requirement:** REQ-003

**Objective:** Determine how the system handles duplicate employee records.

**Preconditions:**
- Existing employee record is available.

**Test Steps:**
1. Record the information for an existing employee.
2. Navigate to Create Employee.
3. Enter matching employee information.
4. Select Save.

**Expected Result:**
- System follows defined duplicate-record handling behavior.
- Duplicate data should not create an uncontrolled duplicate record.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-011 — Search Existing Employee

**Requirement:** REQ-005

**Objective:** Verify that an authorized user can locate an existing employee.

**Test Steps:**
1. Navigate to employee search.
2. Enter valid search criteria for an existing employee.
3. Select Search.

**Expected Result:**
- Matching employee is displayed.
- Displayed information corresponds to the selected record.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-012 — Search Nonexistent Employee

**Requirement:** REQ-005

**Objective:** Verify behavior when no matching employee exists.

**Test Steps:**
1. Navigate to employee search.
2. Enter search criteria that does not match a record.
3. Select Search.

**Expected Result:**
- No employee record is returned.
- System displays an appropriate no-results message.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-013 — Update Employee

**Requirement:** REQ-006

**Objective:** Verify that an authorized user can modify an employee record.

**Preconditions:**
- Employee record exists.

**Test Steps:**
1. Search for an employee.
2. Open the employee record.
3. Modify an editable field.
4. Save the changes.
5. Reopen the employee record.

**Expected Result:**
- Changes are saved successfully.
- Updated information is displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-014 — Update Employee With Invalid Data

**Requirement:** REQ-006

**Objective:** Verify validation when invalid information is entered during an update.

**Test Steps:**
1. Open an existing employee record.
2. Enter invalid information in a validated field.
3. Select Save.

**Expected Result:**
- Invalid change is rejected.
- Validation message is displayed.
- Previous valid data remains intact.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-015 — Delete Employee

**Requirement:** REQ-007

**Objective:** Verify that an authorized user can delete an employee record.

**Preconditions:**
- Employee record exists.

**Test Steps:**
1. Search for an employee.
2. Open the employee record.
3. Select Delete.
4. Confirm deletion.

**Expected Result:**
- Employee is removed.
- Confirmation is displayed.
- Employee no longer appears in search results.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-016 — Delete Nonexistent Employee

**Requirement:** REQ-007

**Objective:** Verify system behavior when attempting to delete a record that does not exist.

**Test Steps:**
1. Attempt to access a nonexistent employee record.
2. Attempt deletion if the application permits the action.

**Expected Result:**
- No unintended record is deleted.
- Appropriate error or no-record message is displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-017 — Assign Training

**Requirement:** REQ-008

**Objective:** Verify that training can be assigned to an employee.

**Preconditions:**
- User is authenticated.
- Employee exists.
- Training course exists.

**Test Steps:**
1. Open an employee record.
2. Select Assign Training.
3. Choose an available course.
4. Confirm assignment.

**Expected Result:**
- Training is assigned successfully.
- Assigned training appears on the employee record.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-018 — Mark Training Complete

**Requirement:** REQ-009

**Objective:** Verify that training status can be updated to completed.

**Preconditions:**
- Employee has assigned training.

**Test Steps:**
1. Open assigned training.
2. Mark training as completed.
3. Save changes.
4. Reopen the employee training record.

**Expected Result:**
- Training status displays Completed.
- Updated status persists after reopening the record.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-019 — Access Protected Page While Logged Out

**Requirement:** REQ-010

**Objective:** Verify that unauthenticated users cannot access protected employee information.

**Preconditions:**
- User is logged out.

**Test Steps:**
1. Attempt to navigate directly to a protected employee page.

**Expected Result:**
- Access is denied or user is redirected to login.
- Protected employee information is not displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run

---

## TC-020 — Access Protected Page After Logout

**Requirement:** REQ-010

**Objective:** Verify that protected resources remain inaccessible after logout.

**Test Steps:**
1. Log into the application.
2. Navigate to a protected employee page.
3. Log out.
4. Attempt to return to the protected page using the browser Back button or URL.

**Expected Result:**
- Protected page is not accessible.
- User is redirected to login or shown an access-denied response.
- Protected information is not displayed.

**Actual Result:**
To be completed during test execution.

**Status:**
Not Run