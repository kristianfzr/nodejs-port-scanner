# node-port-scanner
Nodejs port scanner.

## Usage
```
node index.js example.com
```
## Results
```
Scanning port 21 for host example.com
Scanning port 22 for host example.com
Scanning port 23 for host example.com
Scanning port 25 for host example.com
Scanning port 53 for host example.com
Scanning port 80 for host example.com
Scanning port 110 for host example.com
Scanning port 111 for host example.com
Scanning port 135 for host example.com
Scanning port 139 for host example.com
Scanning port 143 for host example.com
Scanning port 443 for host example.com
Scanning port 445 for host example.com
Scanning port 993 for host example.com
Scanning port 995 for host example.com
Scanning port 1723 for host example.com
Scanning port 3306 for host example.com
Scanning port 3389 for host example.com
Scanning port 5900 for host example.com
Scanning port 8080 for host example.com
Scan complete
[
  { port: 21, status: 'closed' },
  { port: 22, status: 'closed' },
  { port: 23, status: 'closed' },
  { port: 25, status: 'closed' },
  { port: 53, status: 'closed' },
  { port: 80, status: 'open' },
  { port: 110, status: 'closed' },
  { port: 111, status: 'closed' },
  { port: 135, status: 'closed' },
  { port: 139, status: 'closed' },
  { port: 143, status: 'closed' },
  { port: 443, status: 'open' },
  { port: 445, status: 'closed' },
  { port: 993, status: 'closed' },
  { port: 995, status: 'closed' },
  { port: 1723, status: 'closed' },
  { port: 3306, status: 'closed' },
  { port: 3389, status: 'closed' },
  { port: 5900, status: 'closed' },
  { port: 8080, status: 'closed' }
]
```