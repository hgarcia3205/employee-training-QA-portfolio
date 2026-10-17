# Software Quality Assurance Portfolio

End-to-end QA portfolio demonstrating requirements analysis, manual functional testing, REST API validation, Playwright browser automation, requirements traceability, evidence collection, and formal test reporting.

## Portfolio Highlights

- 20 manual test cases designed
- 13 manual test cases executed
- 13 manual tests passed
- 5 REST API scenarios completed in Postman
- Automated API assertions for GET, POST, PUT, and DELETE operations
- 3 Playwright browser automation scenarios completed successfully in Chromium
- Requirements Traceability Matrix
- Master Test Plan
- Test Execution Log
- Final Test Summary Report

## Tools and Technologies

- Playwright
- TypeScript
- Postman
- Git / GitHub
- Visual Studio Code
- Chromium
- OrangeHRM Open-Source Demo
- DummyJSON Users API

## Testing Performed

### Manual Testing

Manual coverage included:

- Valid and invalid authentication
- Required-field validation
- Employee creation
- Employee ID boundary validation
- Duplicate employee-name behavior
- Employee search
- Nonexistent employee search
- Employee record update

### API Testing

Postman was used to validate CRUD-style API operations:

| Test | Method | Purpose | Result |
|---|---|---|---|
| API-001 | GET | Retrieve all users | PASS |
| API-002 | GET | Retrieve a single user | PASS |
| API-003 | POST | Create a user | PASS |
| API-004 | PUT | Update a user | PASS |
| API-005 | DELETE | Delete a user | PASS |

Assertions validated HTTP status codes, JSON response structure, identifiers, submitted values, updated values, and deletion confirmation.

### Automated UI Testing

Playwright automated the following OrangeHRM scenarios:

| Test | Scenario | Result |
|---|---|---|
| AT-001 | Valid login | PASS |
| AT-002 | Invalid login | PASS |
| AT-003 | Create and search employee | PASS |

AT-003 was improved to create its own test data before performing the search, reducing dependency on preexisting records in the shared public demo environment.

## Repository Navigation

- [Requirements](01-requirements/requirements.md)
- [Master Test Plan](02-test-plan/master-test-plan.md)
- [Manual Test Cases](03-test-cases/manual-test-cases.md)
- [Test Execution Log](03-test-cases/test-execution-log.md)
- [Requirements Traceability Matrix](04-traceability/requirements-traceability-matrix.md)
- [Postman API Testing](06-postman/README.md)
- [Playwright Automation](07-playwright/README.md)
- [Final Test Summary](09-test-summary/final-test-summary.md)

## QA Skills Demonstrated

- Requirements analysis
- Test planning
- Functional testing
- Positive and negative testing
- Boundary-value testing
- Regression testing
- Requirements traceability
- REST API testing
- Automated API assertions
- Browser automation
- Test-data management
- Expected-versus-actual validation
- Test evidence collection
- Test reporting

## Key Learning

One important lesson from this project was that an automated test failure does not automatically indicate a software defect.

During development, an employee-search automation failed because the shared public demo environment no longer contained test data created during an earlier cycle. The test was redesigned to create its own employee record before searching for it, making the scenario more repeatable and independent.

## Project Limitations

This project uses public demo and simulated environments. OrangeHRM data may reset or be modified by other users, and DummyJSON simulates create, update, and delete operations rather than permanently persisting changes.

Performance testing, full accessibility testing, penetration testing, and full cross-browser regression testing were outside the final project scope.

## Final Status

**PASS — Project objectives completed within the defined test scope and timebox.**