
from flask import Flask, request
from twilio.twiml.messaging_response import MessagingResponse, Message
import sys

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def inbound_sms():
    print("SMS message received!", file=sys.stderr)

    """Respond and greet the caller by name."""
    resp = MessagingResponse()
    resp.message("sms received!")
    print(request.values['Body'], file=sys.stderr)
    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)