const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://128.199.226.142:9000",
    token: "c5a79b86ff0baf3de961918740a26d9d77739b71",
    options: {
      "sonar.projectKey": "blinkz333",
      "sonar.projectName": "blinkz333Backend",
      "sonar.projectDescription": "blinkz333Backend",
      "sonar.sources": ".",
      "sonar.tests": "src",
      "sonar.inclusions": "**",
      "sonar.test.inclusions":
        "src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx",
      // "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
      // "sonar.testExecutionReportPaths": "coverage/test-reporter.xml",
    },
  },
  () => {}
);
