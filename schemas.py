from pydantic import BaseModel
from datetime import date 

class heirarchybase(BaseModel):
    hrms: str
    startdate:date
    enddate: date
    reportingOfficer1: str
    reportingOfficer2: str
    reviewingOfficer: str
    acceptingOfficer: str
    reportingOfficer1N: str
    reportingOfficer2N: str
    reviewingOfficerN: str
    acceptingOfficerN: str
    placeOfPosting: str

    

class heirarchyCreate(heirarchybase):
    pass


    

class annexure1base(BaseModel):
    Membership: str
    award: str
    duties: str
    targets: str
    achievement: str
    shortfall: str
    propertyreturn: str
    medicalcheckup: str
    annexure_id: int

class getheirarchy(heirarchybase):
    submitted: bool
    reported: bool
    reviewed: bool
    accepted: bool
    annexures1: list[annexure1base]=[]

class annexure1Create(annexure1base):
    pass

class getannexure1(annexure1base):
    pass

class createannexure2(BaseModel):
    accomplishmentOfTargets_1:int
    accomplishmentOfTargets_2:int
    qualityOfOutput_2:int
    qualityOfOutput_1:int
    accomplishmentOfEwork_1:int
    accomplishmentOfEwork_2:int
    attitudeToWork_1:int
    attitudeToWork_2:int
    senseOfResponsibility_1:int
    senseOfResponsibility_2:int
    emotionStability_1:int
    emotionStability_2:int
    communicationSkill_1:int
    communicationSkill_2:int
    moralcourage_1:int
    moralcourage_2:int
    leadership_1:int
    leadership_2:int
    capacitytowork_1:int
    capacitytowork_2:int
    knowledgofwork_1:int
    knowledgofwork_2:int
    strategyplanning_1:int
    strategyplanning_2:int
    decisionmaking_1:int
    decisionmaking_2:int
    initiative_1:int
    initiative_2:int
    abilitytomotivate_1:int
    abilitytomotivate_2:int
    comments_1:str
    comments_2:str
    integerity_1:str
    integerity_2:str


class createannexure3(BaseModel):
    annexure3_id:int 
    agreed : str
    reasons: str 
    comments : str 

class createannexure4(BaseModel):
    annexure4_id:int 
    agreed : str
    reasons: str 
    comments : str 

class userbase(BaseModel):
    hrms: str
    password: str





