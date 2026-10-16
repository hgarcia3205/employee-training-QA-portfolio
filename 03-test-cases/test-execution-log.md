# Test Execution Log

## Application Under Test
OrangeHRM Open-Source Demo

## Test Environment
- Operating System: Windows 11
- Browser: Microsoft Edge or Google Chrome
- Test Type: Manual Functional Testing

## Execution Results

| Test ID | Date | Result | Actual Behavior | Evidence | Defect |
|---|---|---|---|---|---|
| TC-001 | 2026-10-07 | PASS | Valid credentials successfully authenticated the user and the dashboard loaded. | TC-001-valid-login.png | None |
| TC-002 | 2026-10-07 | PASS | Invalid password was rejected and the system displayed "Invalid credentials." User remained on the login page. | TC-002-invalid-password.png | None |
| TC-003 | 2026-10-08 | PASS | Login was rejected when the username field was left blank. The system displayed a "Required" validation message under the Username field. | TC-003-blank-username.png | None |
| TC-004 | 2026-10-08 | PASS | Login was rejected when the password field was left blank. The system displayed a "Required" validation message under the Password field. | TC-004-blank-password.png | None |
| TC-005 | 2026-10-08 | PASS | Login was rejected when both Username and Password were left blank. The system displayed "Required" validation messages under both fields. | TC-005-blank-fields.png | None |
| TC-006 | 2026-10-09 | PASS | A new employee record was successfully created with valid required information. The employee profile loaded after saving, showing the employee name and Employee ID 0373. | TC-006-create-employee.png | None |
| TC-007 | 2026-10-10 | PASS | Employee creation was rejected when the First Name field was left blank. The system displayed a "Required" validation message under the First Name field. | TC-007-create-employee-without-firstname.png | None |
| TC-008 | 2026-10-10 | PASS | Employee creation was rejected when the Last Name field was left blank. The system displayed a "Required" validation message under the Last Name field. | TC-008-create-employee-without-lastname.png | None |
| TC-009 | 2026-10-10 | PASS | Employee creation was prevented when the Employee ID exceeded the allowed length. The system displayed the validation message "Should not exceed 10 characters." | TC-009-invalid-employee-id.png | None |
| TC-010 | 2026-10-10 | PASS | OrangeHRM allowed creation of another employee with the same first, middle, and last name and assigned a unique Employee ID of 0546. Duplicate names are therefore permitted in this test environment. | TC-010-duplicate-employee-name.png | None |
| TC-011 | 2026-10-10 | PASS | Search using employee name and Employee ID 0546 returned one matching employee record: Quality Test Employee1008. | TC-011-search-existing-employee.png | None |
| TC-012 | 2026-10-11 | PASS | Search using a nonexistent Employee ID returned no matching employee records and the system displayed "No Records Found." | TC-012-search-nonexistent-employee.png | None |
| TC-013 | 2026-10-12 | PASS | The employee record was successfully updated. The modified field persisted after the record was saved and reopened. | TC-013-update-employee.png | None |
| TC-014 | | Not Run | Deferred due to project timebox. | None | None |
| TC-015 | | Not Run | Deferred due to project timebox. | None | None |
| TC-016 | | Not Run | Deferred due to project timebox. | None | None |
| TC-017 | | Not Run | Deferred due to project timebox. | None | None |
| TC-018 | | Not Run | Deferred due to project timebox. | None | None |
| TC-019 | | Not Run | Deferred due to project timebox. | None | None |
| TC-020 | | Not Run | Deferred due to project timebox. | None | None |