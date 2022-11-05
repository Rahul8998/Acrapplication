from sqlalchemy.orm import Session
from sqlalchemy import insert , text
import  schemas
from models import profileData , heirarchy , Annexure1, Annexure2 , Annexure3, Annexure4, users
import sqlite3
import datetime


def get_user(db:Session, userdata:schemas.userbase):
    return db.query(users).filter((users.hrms == userdata.hrms),(users.password == userdata.password)).first()


def get_heirarchy(db: Session, hrms: str):
    return db.query(heirarchy).filter(heirarchy.hrms == hrms,heirarchy.submitted == 0).all()

def get_inprogress(db: Session, hrms: str):
    return db.query(heirarchy).filter((heirarchy.hrms == hrms),(heirarchy.submitted == 1),(heirarchy.marked_to != 5)).all()

def get_completed(db: Session, hrms: str):
    return db.query(heirarchy).filter((heirarchy.hrms == hrms),(heirarchy.marked_to == 5),(heirarchy.submitted == 1)).all()

def create_heirarchy(db: Session, heirarchi: schemas.heirarchyCreate):
    db_heirarchy = heirarchy(
        hrms=heirarchi.hrms,
        startdate=heirarchi.startdate,
        enddate=heirarchi.enddate,
        reportingOfficer1=heirarchi.reportingOfficer1,
        reportingOfficer2=heirarchi.reportingOfficer2,
        reviewingOfficer=heirarchi.reviewingOfficer,
        acceptingOfficer=heirarchi.acceptingOfficer,
        placeOfPosting=heirarchi.placeOfPosting,
        reportingOfficer1N=heirarchi.reportingOfficer1N,
        reportingOfficer2N=heirarchi.reportingOfficer2N,
        reviewingOfficerN=heirarchi.reviewingOfficerN,
        acceptingOfficerN=heirarchi.acceptingOfficerN,
        )
    db.add(db_heirarchy)
    db.commit()
    db.refresh(db_heirarchy)
    return { "ok": True}

def add_annexure1(db: Session,annexure1: schemas.annexure1Create):
    db_annexure1 = Annexure1(award=annexure1.award,
    Membership=annexure1.Membership,
    duties=annexure1.duties,
    targets=annexure1.targets,
    achievement=annexure1.achievement,
    shortfall=annexure1.shortfall,
    propertyreturn=annexure1.propertyreturn,
    medicalcheckup=annexure1.medicalcheckup,
    annexure_id=annexure1.annexure_id)
    db_heirarchy = db.query(heirarchy).filter(heirarchy.id == annexure1.annexure_id).first()
    db_heirarchy.submitted = True
    db_heirarchy.marked_to = 1
    db_heirarchy.submitted_on = datetime.datetime.now()
    db.add(db_heirarchy)
    db.add(db_annexure1)
    db.commit()
    db.refresh(db_annexure1)
    db.refresh(db_heirarchy)
    return { "ok": True}    

def delete_heirarchy(db: Session, id: int):
    db_heirarchy = db.query(heirarchy).filter(heirarchy.id == id).first()
    db.delete(db_heirarchy)
    db.commit()
    return { "ok": True}

def get_userdata(db: Session, hrms:str):
    db_query = db.query(profileData).filter(profileData.hrms == hrms).first()
    return db_query

def searchName(db: Session, Sname:str):
    db_query = db.query(profileData) \
        .with_entities(profileData.Name,profileData.hrms,profileData.Designation,profileData.posting) \
            .filter(profileData.Name.ilike(Sname)).all()
    return db_query

def inboxData(db: Session, id:str):
    db_query = db.query(heirarchy) \
        .filter(((heirarchy.marked_to==1) & (heirarchy.reportingOfficer1==id)) \
            | ((heirarchy.marked_to==2) & (heirarchy.reportingOfficer2==id))
            | ((heirarchy.marked_to==3) & (heirarchy.reviewingOfficer==id)) \
                | ((heirarchy.marked_to==4) & (heirarchy.acceptingOfficer==id))).all()
    return db_query

def get_annexure1(db: Session, id:str):
    db_query = db.query(Annexure1).filter(Annexure1.annexure_id==id).first()
    return db_query

def create_annexure2(db:Session,data:tuple):
    conn=sqlite3.connect('sqlapp.db')
    markers = ','.join(['?'] * len(data))
    stmt = "REPLACE INTO annexure2 VALUES ({})".format(markers)
    conn.execute(stmt, data)
    conn.commit()
    conn.close()
    print(data[0])
    db_heirarchy = db.query(heirarchy).filter(heirarchy.id == data[0]).first()
    if db_heirarchy.marked_to == 2:
        db_heirarchy.marked_to = 3
        db_heirarchy.reported2_on = datetime.datetime.now()
    else : 
        db_heirarchy.marked_to = 2
        db_heirarchy.reported1_on = datetime.datetime.now()
    db.commit()
    db.refresh(db_heirarchy)
    return {'ok':True}

def get_Annexure2(db: Session, id:str):
    db_query = db.query(Annexure2).filter(Annexure2.annexure2_id==id).first()
    return db_query

def get_Annexure3(db: Session, id:str):
    db_query = db.query(Annexure3).filter(Annexure3.annexure3_id==id).first()
    return db_query

def get_Annexure4(db: Session, id:str):
    db_query = db.query(Annexure4).filter(Annexure4.annexure4_id==id).first()
    return db_query

def create_annexure3(db:Session,annexure3: schemas.createannexure3):
    db_query = Annexure3(
        annexure3_id=annexure3.annexure3_id,
        agreed=annexure3.agreed,
        reasons = annexure3.reasons,
        comments = annexure3.comments)
    db.add(db_query)
    db_heirarchy = db.query(heirarchy).filter(heirarchy.id == annexure3.annexure3_id).first()
    db_heirarchy.marked_to = 4
    db_heirarchy.reviewed_on = datetime.datetime.now()
    db.add(db_heirarchy)
    db.commit()
    db.refresh(db_heirarchy)
    db.refresh(db_query)
    return {'ok':True}

def create_annexure4(db:Session,annexure4: schemas.createannexure4):
    db_query = Annexure4(
        annexure4_id=annexure4.annexure4_id,
        agreed=annexure4.agreed,
        reasons = annexure4.reasons,
        comments = annexure4.comments)
    db.add(db_query)
    db_heirarchy = db.query(heirarchy).filter(heirarchy.id == annexure4.annexure4_id).first()
    db_heirarchy.marked_to = 5
    db_heirarchy.accepted_on = datetime.datetime.now()
    db.add(db_heirarchy)
    db.commit()
    db.refresh(db_heirarchy)
    db.refresh(db_query)
    return {'ok':True}