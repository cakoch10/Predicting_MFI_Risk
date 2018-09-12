import json

with open('questions.json', 'r') as f:
    data = json.load(f)
    # print(data)
    psych_data = data["psych"]
    # psych_data = json.load(json_psych)
    optimism_lst = psych_data["optimism"]
    for q in optimism_lst:
        print(q)