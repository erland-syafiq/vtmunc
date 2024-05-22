import csv
import json

f = open("./Applicants.csv", "r")



with open('./Applicants.csv', newline='\n') as f:
    applicantsReader = csv.reader(f,  delimiter=',', quotechar='"')
    total = 0
    for vals in applicantsReader:
        
        splitDate = vals[15].split(' ')
        if vals[0] == '\ufeff6':
            vals[0] = 6
        applicant = {
            "id": int(vals[0]),
            "date": "2016-02-15",
            "advisorEmail": vals[1],
            "advisorName": vals[2],
            "advisorPhone": vals[3],
            "advisorRelation": vals[4],
            "advisorOtherInformation": vals[5],
            "headDelegateEmail": vals[6],
            "headDelegateName": vals[7],
            "headDelegatePhone": vals[8],
            "schoolName": vals[9],
            "delegationSize": int(vals[10]),
            "schoolMailingAddress": vals[11],
            "delegateList": vals[12],
            "commentsOrQuestions": vals[14],
            "date": splitDate[0],
            "invoiceStatus": int(vals[13])
        }
        print(json.dumps(applicant, indent=1))
        total += 1
    print(f"Total: {total}")
        
