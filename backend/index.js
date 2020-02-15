const studentVerbalization = [
    "There is a student Peter Johnson",
    "There is a student John Hartman"
]

const mentorForStudentVerbalization = [
    "The mentor of student Peter Johnson is BLC",
    "The mentor of student John Hartman is BLC"
]


elementaryFactTypes = [{
    type: "Student",
    identifiedBy: ["fist name", "surname"],
    elementaryFactTypeExpressions : [
        [{ 
            type: "literal",
            value : "There is a student"
        },
        {
            type: "label",
            labelType: "fact type expression at the label type level",
            name: "first name"
        },
        {
            type: "label",
            labelType: "fact type expression at the label type level",
            name: "surname"
        }]
    ],
    verablizations : studentVerbalization
},
{
    type: "Mentorship",
    elementaryFactTypeExpressions : [
        [{ 
            type: "literal",
            value : "The mentor of"
        },
        {
            type: "object expression",
            references: "Student",
            elementaryFactTypeExpressions :[
                {
                    type: "literal",
                    value: "student"
                },
                {
                    type: "label",
                    labelType: "fact type expression at the label type level",
                    name: "first name"
                },
                {
                    type: "label",
                    labelType: "fact type expression at the label type level",
                    name: "surname"
                },
            ]
        },
        { 
            type: "literal",
            value : "is"
        },
        {
            type: "label",
            labelType: "fact type expression at the label type level",
            name: "teachercode"
        }
        ]
    ],
    verablizations : mentorForStudentVerbalization
}];