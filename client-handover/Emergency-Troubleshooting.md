# Emergency Troubleshooting Guide
**Project**: apexengineering.org.in

---

## 🚨 Diagnostic Protocols for Technical SEO Issues

If website traffic drops or search crawler errors occur, execute the following checks:

### 1. Verification of Sitemap & Robots.txt
* **Issue**: Google reports "Sitemap could not be read" or "Indexed, though blocked by robots.txt".
* **Check**:
  - Open `https://apexengineering.org.in/robots.txt` in a browser.
  - Verify that the path is not blocking root access (`Disallow: /` must NOT exist under `User-agent: *`).
  - Open `https://apexengineering.org.in/sitemap.xml` and check that the URLs return an HTTP 200 success code.

### 2. URL Canonicalization & Trailing Slashes
* **Issue**: Search Console flags "Duplicate page without user-selected canonical" or "Page with redirect".
* **Check**:
  - Verify that all canonical tags match your preferred URL format strictly (HTTPS, non-www, trailing slash).
  - Example: `https://apexengineering.org.in/services/` (with trailing slash) is correct. `https://apexengineering.org.in/services` (without slash) is incorrect.

### 3. Server Configuration & Security Headers
* **Issue**: Web browser displays "Connection not secure" or page fails to render inside external tools.
* **Check**:
  - Confirm SSL certificate validation is not expired (SSL certificates must be auto-renewed).
  - If server hosting changes from Apache to Nginx, ensure `.htaccess` rules are migrated to the `nginx.conf` equivalents.
