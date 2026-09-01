export const testSuites = [
  {
    id: 'cypress-e2e',
    name: 'Cypress E2E Testing',
    command: 'npx cypress run --spec "cypress/e2e/core_flows.cy.ts"',
    runner: 'Cypress v13.6',
    duration: '2.4s',
    totalTests: 4,
    description: 'End-to-End browser automation testing critical user journeys and RBAC permissions.',
    tests: [
      {
        title: 'Auth & Session: Enforce RBAC redirects on unauthorized routes',
        duration: '320ms',
        status: 'passed',
        details: 'cy.visit("/admin") -> redirected to "/login" -> cy.login("officer") -> role verified'
      },
      {
        title: 'Complaint Flow: Submit complaint with attachments and verify status',
        duration: '680ms',
        status: 'passed',
        details: 'cy.get("#title").type(...) -> cy.uploadFile("doc.pdf") -> cy.contains("Submitted successfully")'
      },
      {
        title: 'POS Cashier Flow: Add items to cart and process atomic payment',
        duration: '510ms',
        status: 'passed',
        details: 'cy.addItem("Americano") -> cy.applyDiscount("STUDENT") -> cy.checkout() -> stock decremented'
      },
      {
        title: 'UI Resilience: Responsive layout preserves navigation on mobile viewport',
        duration: '280ms',
        status: 'passed',
        details: 'cy.viewport("iphone-x") -> hamburger menu rendered -> toggle menu verified'
      }
    ]
  },
  {
    id: 'fastapi-websocket',
    name: 'FastAPI & WebSocket Suite',
    command: 'pytest tests/test_telemetry.py -v --asyncio-mode=auto',
    runner: 'Pytest 8.1 / FastAPI TestClient',
    duration: '1.2s',
    totalTests: 4,
    description: 'High-speed asynchronous endpoint validation and real-time WebSocket protocol tests.',
    tests: [
      {
        title: 'Health Check: GET /api/v1/healthz returns 200 OK & DB pool active',
        duration: '18ms',
        status: 'passed',
        details: 'status_code == 200, response.json()["db_connected"] is True, latency: 12ms'
      },
      {
        title: 'WebSocket Handshake: WS /ws/sensors/stream establishes persistent session',
        duration: '42ms',
        status: 'passed',
        details: 'client.websocket_connect() -> 101 Switching Protocols -> ping/pong heartbeat active'
      },
      {
        title: 'Pydantic Schema: Ingest sensor payload and validate data types',
        duration: '24ms',
        status: 'passed',
        details: 'payload {"sensor_id": "BED_04", "motion_delta": 4.82} conforms to SensorPayloadModel'
      },
      {
        title: 'Real-time Alert Broadcast: Fall detection alert dispatched < 50ms',
        duration: '38ms',
        status: 'passed',
        details: 'emergency event emitted -> 4 subscriber sockets acknowledged within 31ms'
      }
    ]
  },
  {
    id: 'postman-contract',
    name: 'Postman / Contract API Tests',
    command: 'newman run collections/api_contracts.postman_collection.json',
    runner: 'Newman v6.0 / Postman CLI',
    duration: '1.8s',
    totalTests: 3,
    description: 'REST API contract validation, response schema checks, and negative edge case testing.',
    tests: [
      {
        title: 'Security: Rate limiter restricts abusive requests (>100 req/min)',
        duration: '140ms',
        status: 'passed',
        details: 'pm.response.to.have.status(429) -> "Retry-After" header verified'
      },
      {
        title: 'Contract Validation: GET /api/v1/orders matches OpenAPI schema',
        duration: '95ms',
        status: 'passed',
        details: 'tv4.validate(responseBody, schema) === true -> All required fields present'
      },
      {
        title: 'Sanitization: SQL injection attempt blocked on query parameters',
        duration: '78ms',
        status: 'passed',
        details: 'payload "\' OR 1=1;--" properly escaped -> returned 400 Bad Request safely'
      }
    ]
  }
];
