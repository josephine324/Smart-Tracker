# Security Scan Results

## Dependency Vulnerability Scanning
- **Tool**: npm audit
- **Frequency**: Run on every push to `main` via GitHub Actions.
- **Configuration**: Fails on critical vulnerabilities; allows high/moderate vulnerabilities temporarily.
- **Remediation**:
  - Fixed `form-data` (critical) and `on-headers` via `npm audit fix`.
  - Attempted fix for `nth-check` (high) via `svgo@3.0.2` override in `frontend/package.json`.
  - Moderate vulnerabilities (`postcss`, `webpack-dev-server`) pending due to risk of breaking changes.
  - Plan: Upgrade `react-scripts` or replace vulnerable dependencies in next sprint.
  - Last scan: July 31, 2025 - No critical vulnerabilities; high/moderate issues remain.

## Container Image Security Scanning
- **Tool**: Trivy
- **Frequency**: Run on every push to `main` via GitHub Actions.
- **Configuration**: Scans Docker images for critical/high vulnerabilities.
- **Remediation**:
  - Update `node:18-alpine` base images and dependencies.
  - Last scan: July 31, 2025 - No critical vulnerabilities found.

## Authentication Security
- **Current Method**: ACR admin credentials for GitHub Actions to push images. User Assigned Managed Identity (`smarttacker-identity`) for Container Apps to pull images from ACR.
- **Configuration**: Admin username and password stored in GitHub Secrets for ACR access. Managed Identity assigned `AcrPull` role.
- **Remediation**:
  - Rotate ACR admin password periodically in Azure Portal > Container Registry > Access keys.
  - Added Service Principal credentials for automated Terraform apply in pipeline.
  - Request Owner/User Access Administrator role to create a Service Principal for future automation enhancements.

## Deployment Notes
- **URL Change**: Frontend URL changed to `https://smarttrackerapp--0000002.bravesand-7252685b.francecentral.azurecontainerapps.io` due to new revision.
- **Resolution**: Updated `BACKEND_URL` to use dynamic `latest_revision_fqdn`. Automated Terraform apply with commit SHA in pipeline.
- **Recommendation**: Disable revision suffix or use a custom domain to stabilize URLs.
