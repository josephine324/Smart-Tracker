# Changelog

All notable changes to this project are documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and adheres to [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2025-08-05

### Added
- Complete frontend application code for SmartTracker App
- Infrastructure-as-code using Terraform for Azure Container Apps, ACR, and other resources
- GitHub Actions CI/CD pipeline configuration (`.github/workflows/main.yml`)
- Automatic build, test, security scan, and deployment stages
- Separate staging and production environments
- Live URLs for staging and production
- `README.md` with environment links and video demo

### Changed
- UI: updated homepage text to demonstrate live deployment
- Pipeline: improved workflow steps during CI/CD testing

### Fixed
- Resolved dependency scan issue that caused test failures in early pipeline runs

### Security
- Integrated automated dependency scanning into CI workflow

---

## [0.1.0] - 2025-08-01

### Added
- Initial React frontend setup
- Dockerfile for containerization
- Basic Terraform configuration (Azure provider setup)
- First version of CI pipeline (build + test steps)
