npx cypress run
exit_code=$?  # Capture the exit status of the last command
echo "Cypress exit code: $exit_code"
yarn generate-report
exit $exit_code