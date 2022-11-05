from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date,Float
from sqlalchemy.orm import relationship, declarative_base

from database import Base



class users(Base):
    __tablename__ = "users"
    hrms = Column(String, primary_key = True, index = True)
    password = Column(String)
    role = Column(String)



class heirarchy(Base):
    __tablename__ = "heirarchy"

    id = Column(Integer, primary_key=True, index=True)
    hrms = Column(String,index=True)
    startdate = Column(Date)
    enddate = Column(Date)
    reportingOfficer1 = Column(String)
    reportingOfficer2 = Column(String)
    reviewingOfficer = Column(String)
    acceptingOfficer = Column(String)
    reportingOfficer1N = Column(String)
    reportingOfficer2N = Column(String)
    reviewingOfficerN = Column(String)
    acceptingOfficerN = Column(String)
    submitted = Column(Boolean, default=0)
    reported1_on = Column(Date)
    reported2_on = Column(Date)
    reviewed_on = Column(Date)
    accepted_on = Column(Date)
    placeOfPosting = Column(String)
    annexures1 = relationship("Annexure1", back_populates="owner",cascade="all,delete",passive_deletes=True)
    marked_to = Column(Integer,index=True,default=0)
    submitted_on = Column(Date)
    

class Annexure1(Base):
    __tablename__ = "Annexure1"

    id = Column(Integer, primary_key=True, index=True)
    annexure_id = Column(Integer, ForeignKey("heirarchy.id",ondelete="CASCADE"),unique=True)
    Membership= Column(String)
    award = Column(String)
    duties = Column(String)
    targets = Column(String)
    achievement = Column(String)
    shortfall = Column(String)
    propertyreturn = Column(String)
    medicalcheckup = Column(String)
    owner = relationship("heirarchy", back_populates="annexures1")


class profileData(Base):
    __tablename__ = "profileData"

    id = Column(Integer,primary_key=True,index=True)
    hrms = Column(String)
    Name = Column(String)
    DateofBirth = Column(Date)
    Mobileno = Column(Integer)
    DateofJoining = Column(Date)
    posting = Column(String)
    DateofJoiningCpost = Column(Date)
    Designation = Column(String)


class Annexure2(Base):
    __tablename__ = "Annexure2"
    annexure2_id=Column(Integer,ForeignKey("heirarchy.id",ondelete="CASCADE"),primary_key=True,index=True)
    agree_1=Column(String)
    agree_2=Column(String)
    accomplishmentOfTargets_1=Column(Float)
    accomplishmentOfTargets_2=Column(Float)
    qualityOfOutput_1=Column(Float)
    qualityOfOutput_2=Column(Float)
    accomplishmentOfEwork_1=Column(Float)
    accomplishmentOfEwork_2=Column(Float)
    attitudeToWork_1=Column(Float)
    attitudeToWork_2=Column(Float)
    senseOfResponsibility_1=Column(Float)
    senseOfResponsibility_2=Column(Float)
    emotionStability_1=Column(Float)
    emotionStability_2=Column(Float)
    communicationSkill_1=Column(Float)
    communicationSkill_2=Column(Float)
    moralcourage_1=Column(Float)
    moralcourage_2=Column(Float)
    leadership_1=Column(Float)
    leadership_2=Column(Float)
    capacitytowork_1=Column(Float)
    capacitytowork_2=Column(Float)
    knowledgofwork_1=Column(Float)
    knowledgofwork_2=Column(Float)
    strategyplanning_1=Column(Float)
    strategyplanning_2=Column(Float)
    decisionmaking_1=Column(Float)
    decisionmaking_2=Column(Float)
    initiative_1=Column(Float)
    initiative_2=Column(Float)
    abilitytomotivate_1=Column(Float)
    abilitytomotivate_2=Column(Float)
    comments_1=Column(String)
    comments_2=Column(String)
    integerity_1=Column(String)
    integerity_2=Column(String)
    
class Annexure3(Base):
    __tablename__ = "Annexure3"
    annexure3_id = Column(Integer,ForeignKey("heirarchy.id",ondelete="CASCADE"),primary_key=True, index=True,)
    agreed = Column(String)
    reasons = Column(String)
    comments = Column(String)

class Annexure4(Base):
    __tablename__ = "Annexure4"
    annexure4_id = Column(Integer,ForeignKey("heirarchy.id",ondelete="CASCADE"),primary_key=True, index=True,)
    agreed = Column(String)
    reasons = Column(String)
    comments = Column(String)