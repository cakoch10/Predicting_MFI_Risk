
#from flask import Flask, request
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from nltk.tokenize import word_tokenize
import nltk
#from twilio.twiml.messaging_response import MessagingResponse, Message
import sys

# app = Flask(__name__)
#
# @app.route("/", methods=['GET', 'POST'])
# def inbound_sms():
#     print("SMS message received!", file=sys.stderr)
#
#     """Respond and greet the caller by name."""
#     resp = MessagingResponse()
#     resp.message("sms received!")
#     print(request.values['Body'], file=sys.stderr)
#     return str(resp)
#
def format_sentence(sent):
    return({word: True for word in nltk.word_tokenize(sent)})
    
""" Train models with past answers that lead to business success
    Input should be a list of (answer, outcome) pairs"""
def train_sentiment(train_data):
    dictionary = set(word.lower() for passage in train_data for word in word_tokenize(passage[0]))
    t = [({word: (word in word_tokenize(x[0])) for word in dictionary}, x[1]) for x in train]
    classifier = nltk.NaiveBayesClassifier.train(t)
    return classifier
""" Analyze sentiment from the answer to the question:
    Where do you see your business in a year's time?
"""
def sentiment(classifier, answer):
    print(classifier.classify(format_sentence(answer)))

if __name__ == "__main__":
    train = [("Great place to be when you are in Bangalore.", "pos"),
            ("The place was being renovated when I visited so the seating was limited.", "neg"),
            ("Loved the ambience, loved the food", "pos"),
            ("The food is delicious but not over the top.", "neg"),
            ("Service - Little slow, probably because too many people.", "neg"),
            ("The place is not easy to locate", "neg"),
            ("Mushroom fried rice was spicy", "pos"),
            ]
    classifier = train_sentiment(train)

    print("done training")
    print(sentiment(classifier, "I love the super spicy food"))
