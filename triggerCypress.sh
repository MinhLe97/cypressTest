npx cypress run
exit_code=$?  # Capture the exit status of the last command
echo "Cypress exit code: $exit_code"
yarn generate-report

if [ "$exit_code" -eq 0 ]; then
  result="✅ Success"
else
  result="❌ Fail"
fi

echo $result" and exit with status "$exit_code

curl -H "Content-Type: application/json" -X POST \
            -d '{
              "content": "🚀 **CircleCI Build Notification**\n🔹 Project: cypressTest\n🔹 Status: '"$result"'\n🔹 At: '"$(TZ="Asia/Ho_Chi_Minh" date "+%Y-%m-%d %H:%M:%S")"'"
            }' \
            https://discord.com/api/webhooks/1340252193088999455/NrPzSkFjcCTaD67x8A2pglA2juOM5JaIFdEOaGZqHA3OHdj9WONa-D29M1dQvwEnxjgw

exit $exit_code