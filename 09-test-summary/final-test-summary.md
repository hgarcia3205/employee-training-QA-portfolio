# Final Test Summary Report

## Project
Employee Training Management System QA Portfolio Project

## Applications and Tools Used

- OrangeHRM Open-Source Demo
- DummyJSON Users API
- Postman
- Playwright
- Visual Studio Code
- Git / GitHub
- Windows 11
- Chromium / Microsoft Edge

## 1. Project Objective

The objective of this project was to demonstrate a structured software quality assurance process through requirements analysis, manual functional testing, API testing, automated UI testing, defect-oriented validation, evidence collection, and final test reporting.

The project focused on validating authentication, employee-management workflows, API behavior, input validation, and automated regression scenarios.

## 2. Testing Scope

Testing included:

- Valid authentication
- Invalid authentication
- Required-field validation
- Employee creation
- Employee ID validation
- Duplicate employee-name behavior
- Employee search
- Employee update
- REST API GET requests
- REST API POST requests
- REST API PUT requests
- REST API DELETE requests
- Automated UI testing with Playwright

## 3. Manual Testing Summary

A total of 20 manual test cases were designed.

The following 13 manual test cases were executed:

| Test Case | Description | Result |
|---|---|---|
| TC-001 | Valid user login | PASS |
| TC-002 | Invalid password | PASS |
| TC-003 | Blank username | PASS |
| TC-004 | Blank password | PASS |
| TC-005 | Blank username and password | PASS |
| TC-006 | Create employee with valid data | PASS |
| TC-007 | Create employee without first name | PASS |
| TC-008 | Create employee without last name | PASS |
| TC-009 | Create employee with invalid Employee ID length | PASS |
| TC-010 | Duplicate employee-name behavior | PASS |
| TC-011 | Search existing employee | PASS |
| TC-012 | Search nonexistent employee | PASS |
| TC-013 | Update employee | PASS |

### Manual Test Totals

- Planned: 20
- Executed: 13
- Passed: 13
- Failed: 0
- Blocked: 0
- Deferred / Not Run: 7

The remaining manual tests were deferred because the project was timeboxed and additional test coverage was provided through API and automated UI testing.

## 4. Manual Testing Observations

The application correctly:

- Accepted valid administrator credentials.
- Rejected invalid authentication attempts.
- Required username and password fields.
- Required employee first and last names.
- Enforced the Employee ID maximum-length validation rule.
- Allowed employees with identical names when unique Employee IDs were assigned.
- Returned matching employees during employee search.
- Returned no results for nonexistent employee searches.
- Preserved employee record updates after saving.

One important observation was that duplicate employee names were permitted. This was not classified as a defect because the system assigned unique Employee IDs and did not demonstrate an invalid record state.

## 5. API Testing Summary

Postman was used to create an Employee Management API QA Test collection against the DummyJSON Users API.

Five API requests were tested:

| API Test | Method | Purpose | Result |
|---|---|---|---|
| API-001 | GET | Retrieve all users | PASS |
| API-002 | GET | Retrieve one user | PASS |
| API-003 | POST | Create user | PASS |
| API-004 | PUT | Update user | PASS |
| API-005 | DELETE | Delete user | PASS |

### API Validation Performed

The Postman tests validated:

- HTTP status codes
- JSON response structure
- Required response properties
- User identifiers
- Submitted values
- Updated values
- Deletion confirmation
- Generated IDs

### API Test Totals

- API requests executed: 5
- Passed: 5
- Failed: 0

All API requests passed the automated Postman assertions created for this project.

DummyJSON simulates create, update, and delete operations, so persistence of those changes was not expected as part of the test environment.

## 6. Automated UI Testing Summary

Playwright was used to automate three OrangeHRM scenarios in Chromium.

| Automated Test | Description | Result |
|---|---|---|
| AT-001 | Valid OrangeHRM login | PASS |
| AT-002 | Invalid OrangeHRM login | PASS |
| AT-003 | Create and search employee | PASS |

### Automated Test Totals

- Automated tests executed: 3
- Passed: 3
- Failed: 0

AT-003 initially depended on an employee record created during an earlier manual test cycle. Because the public OrangeHRM demo environment can change or reset, the automated test was improved so that it creates its own employee test data before performing the search.

This reduced dependency on preexisting test data and made the automated test more repeatable.

## 7. Test Evidence

Evidence was collected throughout the project and stored in the `08-evidence` directory.

Evidence includes:

- Successful login
- Invalid login validation
- Blank-field validation
- Employee creation
- Required-field validation
- Employee ID validation
- Employee search
- API test results
- Playwright HTML test results

## 8. Defects

No confirmed software defects were identified during the completed test scope.

Several negative and boundary scenarios were tested successfully, including invalid authentication, blank required fields, oversized Employee ID input, and nonexistent employee searches.

Observed system behavior that differed from initial assumptions was reviewed before classification.

For example, duplicate employee names were accepted by the application. This was documented as expected system behavior rather than incorrectly classified as a defect.

## 9. Deferred Testing

The following originally planned manual test cases were not executed during this test cycle:

- TC-014
- TC-015
- TC-016
- TC-017
- TC-018
- TC-019
- TC-020

These tests were deferred because of the project timebox.

They may be included in a future regression cycle if additional manual coverage is required.

## 10. Risks and Limitations

The project used public demonstration and simulated API environments.

Limitations include:

- OrangeHRM is a shared public demo environment.
- Test records may be changed or removed by other users.
- The environment may reset without notice.
- DummyJSON simulates POST, PUT, and DELETE operations rather than permanently modifying backend data.
- The project did not test production systems.
- Performance, load, accessibility, security penetration testing, and full cross-browser regression testing were outside the final project scope.

## 11. Final Assessment

The completed test scope met the primary objectives of the project.

The project successfully demonstrated:

- Requirements analysis
- Test planning
- Manual functional testing
- Negative testing
- Boundary validation
- Requirements traceability
- Test execution documentation
- API testing
- Automated API assertions
- Automated browser testing
- Test evidence collection
- Test reporting

All executed manual, API, and automated tests passed within the defined test environments.

## 12. Lessons Learned

This project demonstrated the importance of:

- Defining expected results before executing tests.
- Distinguishing expected behavior from actual behavior.
- Avoiding assumptions when classifying defects.
- Creating repeatable test data for automated tests.
- Separating test design from test execution.
- Documenting evidence for each significant test result.
- Understanding environmental limitations before interpreting failures.
- Using automation for repeatable regression scenarios.
- Combining manual, API, and automated testing for broader coverage.

## 13. Future Enhancements

Future iterations could include:

- Additional negative API tests
- Authentication API testing
- API schema validation
- Section 508 accessibility testing
- Cross-browser Playwright execution
- Additional employee-management regression scenarios
- GitHub Actions continuous integration
- Defect tracking through GitHub Issues or Jira
- Performance testing
- Test-data management
- Security-focused QA scenarios

## Final Status

**PASS — Project objectives completed within the defined timebox and test scope.**