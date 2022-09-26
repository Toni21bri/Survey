const defaultSurveyJSON = {
    "title": "Automotive Sales Costumer Sales",
    "description": "This Survey is to check potentially sales of automotive.",
    "logoPosition": "right",
    "completedHtmlOnCondition": [
     {},
     {},
     {
      "html": "Please type age between 18 years  and 100 years."
     }
    ],
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Age?",
        "isRequired": true
       }
      ],
      "title": "Age",
      "description": "Please enter age between 18 years and 100 years"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "dropdown",
        "name": "question2",
        "title": "Gender?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Male"
         },
         {
          "value": "item2",
          "text": "Female"
         },
         {
          "value": "item3",
          "text": "Other"
         }
        ]
       }
      ],
      "title": "Gender"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "dropdown",
        "name": "question3",
        "title": "Do you own a car driving license? ",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No, I prefer using other transport"
         }
        ]
       }
      ],
      "title": "Driving License"
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "boolean",
        "name": "question4",
        "title": "Is this your first car? ",
        "isRequired": true
       }
      ],
      "title": "Car Ownership"
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "dropdown",
        "name": "question5",
        "title": "Which drivetrain do you prefer? ",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "FWD"
         },
         {
          "value": "item2",
          "text": "RWD"
         },
         {
          "value": "item3",
          "text": "I don't know"
         }
        ]
       }
      ],
      "title": "Drivetrain"
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "boolean",
        "name": "question6",
        "title": "Are you worried about fuel emissions? ",
        "isRequired": true
       }
      ],
      "title": "Fuel Emissions"
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "text",
        "name": "question7",
        "title": "How many cars do you have in your family? "
       }
      ],
      "title": "Cars "
     },
     {
      "name": "page8",
      "elements": [
       {
        "type": "dropdown",
        "name": "question8",
        "title": "Which car make do you drive? ",
        "choices": [
         {
          "value": "item1",
          "text": "BMW"
         },
         {
          "value": "item2",
          "text": "Mercedes"
         },
         {
          "value": "item3",
          "text": "Ford"
         },
         {
          "value": "item5",
          "text": "Audi"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "question9",
        "title": "Which car make do you drive? ",
        "choices": [
         {
          "value": "item1",
          "text": "BMW i4 M50 "
         },
         {
          "value": "item2",
          "text": "MERCEDES BENZ CLS-Class"
         },
         {
          "value": "item3",
          "text": "Mustang"
         },
         {
          "value": "item4",
          "text": "A1"
         }
        ]
       }
      ],
      "title": "Car Make & Model",
      "description": "Car Make"
     }
    ],
    "triggers": [
     {
      "type": "complete",
      "expression": "{question1} < 18 or {question1} > 100"
     },
     {
      "type": "complete",
      "expression": "{question3} = 'item2'"
     },
     {
      "type": "runexpression",
      "expression": "{question4} = true",
      "runExpression": "We are targeting more experienced clients, thank you for your interest."
     }
    ]
   }
const defaultSurveyCSS = {
    header: 'bg-primary text-white p-3',
    body: 'bg-light',
    completePage: 'p-3',
};
const defaultSurveyDATA = {};

const defaultSurveyConfig = {
    defaultSurveyCSS,
    defaultSurveyDATA,
    defaultSurveyJSON
}






export default defaultSurveyConfig;
   
