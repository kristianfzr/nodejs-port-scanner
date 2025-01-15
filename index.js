const net = require('net')

function checkPort(host, port, timeout = 1000) {
    return new Promise((resolve) => {
        const socket = new net.Socket();

        // Handle successful connection
        socket.connect(port, host, () => {
            socket.destroy();
            resolve({ port, status: 'open' });
        });

        // Handle errors
        socket.on('error', () => {
            socket.destroy();
            resolve({ port, status: 'closed' });
        });

        // Correctly set the timeout
        socket.setTimeout(timeout);
        socket.on('timeout', () => {
            socket.destroy();
            resolve({ port, status: 'closed' });
        });
    });
}


// Function to scan a range of ports
async function scanPorts(host) {
    const commonPorts = [
        21, 22, 23, 25, 53, 80, 110, 111, 135, 139, 143, 443, 445, 993, 995, 1723, 3306, 3389, 5900, 8080
    ];
    const results = [];

    for (const port of commonPorts) {
        console.log(`Scanning port ${port} for host ${host}`);
        try {
            const result = await checkPort(host, port);
            results.push(result);
        } catch (e) {
            console.log(`Error scanning port ${port}`, e);
        }
    }

    return results; 
}


// Main function to parse arguments and start scanning
async function main() {
    const args = process.argv.slice(2)
    
    if(args.length < 1) {
        console.log(`Usage: node index.js <host>`)
        process.exit(1)
    }
    
    const host = args[0]
    
    const results = await scanPorts(host);
    console.log('Scan complete');
    console.log(results);
}

main()