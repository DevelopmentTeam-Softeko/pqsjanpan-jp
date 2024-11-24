module.exports = {
  apps: [
    {
      name: 'pqsjapan-app', // Change this to your application name
      script: 'node_modules/next/dist/bin/next', // Path to the Next.js executable
      args: 'start', // Arguments to pass to the Next.js script
      cwd: './', // Current working directory of the application
      instances: 'max', // Number of instances to run (use "max" to auto-detect CPU cores)
      exec_mode: 'cluster', // Execution mode (cluster for multi-process)
      watch: false, // Watch for file changes and restart the application
      ignore_watch: ['node_modules', '.next'], // Paths to ignore when watching for changes
      max_memory_restart: '1G', // Restart the application if it exceeds 1GB memory usage
      log_date_format: 'YYYY-MM-DD HH:mm Z', // Log date format
      merge_logs: true, // Merge logs from different instances into a single file
      env: {
        NODE_ENV: 'production', // Set your desired Node.js environment
      },
      error_file: './logs/error.log', // Error log file path
      out_file: './logs/out.log', // Output log file path
      pid_file: './pm2.pid', // Process ID file path
    },
  ],
}
