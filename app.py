
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
    all_words = set(word.lower() for passage in train_data for word in word_tokenize(passage[0]))
    t = [({word: (word in word_tokenize(x[0])) for word in all_words}, x[1]) for x in train_data]
    classifier = nltk.NaiveBayesClassifier.train(t)
    """Prints out the most significant text features"""
    #classifier.show_most_informative_features()
    return classifier
""" Analyze sentiment from the answer to the question:
    Where do you see your business in a year's time?
"""
def sentiment(classifier, answer):

    return classifier.classify(format_sentence(answer))

if __name__ == "__main__":
    train = [("My business will yield huge profits", "pos"),
            ("We have many potential customers", "pos"),
            ("want to expand into the neighboring town", "pos"),
            ("We will reach a thousand customers soon", "pos"),
            ("have many friends who support my business", "pos"),
            ("We will definitely take off", "pos"),
            ("I am confident", "pos"),
            ("competition is stiff", "neg"),
            ("I am optimistic", "pos"),
            ("I will hire more people", "pos"),
            ("we will succeed", "pos"),
            ("Not enough capital", "neg"),
            ("The market will fail", "neg"),
            ("Pessimistic", "neg")
            ]
    classifier = train_sentiment(train)

    #positive example
    sentence = "I am optimistic that we will have many customers"
    #negative example
    #sentence = "We will surely fail"
    result_trained_data = sentiment(classifier, sentence)
    #Vader Analyzer
    analyzer = SentimentIntensityAnalyzer()

    result_vader = analyzer.polarity_scores(sentence)
    overall = result_vader["pos"]-result_vader["neg"]
    if overall>0:
        res = "positive"
    else:
        res = "negative"
    print("Result without training data: " + str(res))
    if result_trained_data=="pos":
        print("Result with training data: Positive")
    else:
        print("Result with training data: negative")
