import { Component } from "@angular/core";
import * as Survey from 'survey-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

function avgerage_answers(j) {
  var sum = 0;

  Object.keys(j).forEach(function(key) {
    if (key.indexOf("hardly") >= 0 || 
        key.indexOf("worry") >= 0 ||
        key.indexOf("fun") >= 0 ||
        key.indexOf("wrong") >= 0 ||
        key.indexOf("thinking") >= 0 ||
        key.indexOf("resist") >= 0 ||
        key.indexOf("poverty") >= 0 ||
        key.indexOf("yourself") >= 0 ||
        key.indexOf("fortune") >= 0 ||
        key.indexOf("chiefly") >= 0 ||
        key.indexOf("inherit") >= 0
      ) {
      var n = parseInt(j[key]);
      sum = sum + -1*n + 6;
    }
    else {
      sum = sum + parseInt(j[key]);
    }
  });
  var avg = sum / Object.keys(j).length;
  return avg;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) {
    console.log("Survey initiated");
  }
  avg1 = 0;
  title = "app works!";
  json = {
    // "locale": "es",
    "title": "Loan Prescreening Survey",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "matrix",
        "name": "question1",
        "title": "Optimism",
        "columns": [
         {
          "value": "5",
          "text": "Strongly Agree"
         },
         {
          "value": "4",
          "text": "Agree"
         },
         {
          "value": "3",
          "text": "Neutral"
         },
         {
          "value": "2",
          "text": "Disagree"
         },
         {
          "value": "1",
          "text": "Strongly Disagree"
         }
        ],
        "rows": [
         "I am facing my future in an optimistic way",
         "            I can hardly think of something positive in the future",
         "            I worry about my future",
         "            It often seems to me that everything is gloomy"
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "matrix",
        "name": "Decision making",
        "title": {
         "es": "Decision making"
        },
        "columns": [
         {
          "value": "5",
          "text": "Strongly Agree"
         },
         {
          "value": "4",
          "text": "Agree"
         },
         {
          "value": "3",
          "text": "Neutral"
         },
         {
          "value": "2",
          "text": "Disagree"
         },
         {
          "value": "1",
          "text": "Strongly Disagree"
         }
        ],
        "rows": [
         "I do certain things that are bad for me, if they are fun",
         "            Pleasure and fun sometimes keep me from getting work done",
         "            Sometimes I can’t stop myself from doing something, even if I know it is wrong",
         "            I often act without thinking through all the alternatives",
         "            I find it difficult to resist buying something that really appeals to me"
        ]
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "matrix",
        "name": "Goals",
        "title": {
         "es": "Goals"
        },
        "columns": [
         {
          "value": "5",
          "text": "Strongly Agree"
         },
         {
          "value": "4",
          "text": "Agree"
         },
         {
          "value": "3",
          "text": "Neutral"
         },
         {
          "value": "2",
          "text": "Disagree"
         },
         {
          "value": "1",
          "text": "Strongly Disagree"
         }
        ],
        "rows": [
         " I experience inspiration",
         "            Something I encounter or experience inspires me",
         "            I am inspired to do something",
         "            I feel inspired"
        ]
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "matrix",
        "name": "Self-determination",
        "title": {
         "es": "Self-determination"
        },
        "columns": [
         {
          "value": "5",
          "text": "Strongly Agree"
         },
         {
          "value": "4",
          "text": "Agree"
         },
         {
          "value": "3",
          "text": "Neutral"
         },
         {
          "value": "2",
          "text": "Disagree"
         },
         {
          "value": "1",
          "text": "Strongly Disagree"
         }
        ],
        "rows": [
         "Saving and careful investing are a key factor in becoming rich ",
         "            Whether or not I get to become wealthy depends mostly on my ability ",
         "            In the long run, people who take very good care of their finances stay wealthy ",
         "            If I become poor, it’s usually my own fault ",
         "            I am usually able to protect my personal interests ",
         "            When I get what I want, it’s usually because I worked hard for it ",
         "            My life is determined by my own actions ",
         "            There is little one can do to prevent poverty  ",
         "            Becoming rich has nothing to do with luck ",
         "            Regarding money, there isn’t much you can do for yourself when you are poor  ",
         "            It’s not always wise for me to save, because many things turn out to be a matter of good or bad fortune ",
         "            It’s chiefly a matter of fate whether I become rich or poor",
         "            Only those who inherit or win money can possibly become rich"
        ]
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "comment",
        "name": "Business plan",
        "title": "Please describe your business"
       }
      ]
    }
    ],
    "showProgressBar": "top"
   };

  onSurveySaved(survey) {
    this.json = survey;
  }

  // public helper(response_str: string) : void {
  //   console.log("Helper called");
  //   this.http.post("http://ae02d1fc.ngrok.io", "business_plan", httpOptions).subscribe((res) => console.log(res));
  // }


  ngOnInit() {

    let surveyModel = new Survey.Model(this.json);
    surveyModel.onComplete.add(function(survey, options) {
      console.log("Callback queried");
      var data = survey.data;
      var business_plan = data["Business plan"];
      var optimism = data["question1"];
      var non_impulsiveness = data["Decision making"];
      var goal = data["Goals"];
      var locus = data["Self-determination"];
      // create score by averaging
      var o_avg = avgerage_answers(optimism);
      var imp_avg = avgerage_answers(non_impulsiveness);
      var goal_avg = avgerage_answers(goal);
      var locus_avg = avgerage_answers(locus);
      this.avg1 = o_avg;
      console.log("Optimism score: " + o_avg);
      console.log("Un-impulsiveness score: " + imp_avg);
      console.log("Goal seeking attitude: " + goal_avg);
      console.log("Self-determination: " + locus_avg);

      var overall_avg = (o_avg+imp_avg+goal_avg+locus_avg)/4;
      console.log("Overall: " + overall_avg);

      // console.log("The business plan is: " + business_plan);

      // now just ping python server
      // console.log(httpOptions);
      // this.helper(business_plan).bind(this);
      this.http.get('localhost:5000').map(response => response.json);
    });

    Survey.SurveyNG.render('surveyElement', { model: surveyModel });
  }
}
