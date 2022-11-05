from fastapi.staticfiles import StaticFiles
from fastapi import Depends, FastAPI, HTTPException, Body, Request, status
from fastapi.responses import JSONResponse
from fastapi.middleware.gzip import GZipMiddleware
from sqlalchemy.orm import Session
from fastapi_jwt_auth import AuthJWT
from fastapi_jwt_auth.exceptions import AuthJWTException
import uvicorn
from typing import List
import crud, models, schemas
from database import SessionLocal, engine
from pydantic import BaseModel
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(GZipMiddleware, minimum_size=1000)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class User(BaseModel):
    username: str
    password: str


class Settings(BaseModel):
    authjwt_secret_key: str = "xndjnffkfnffjfhjhgjgfsyiz"

# callback to get your configuration
@AuthJWT.load_config
def get_config():
    return Settings()

# exception handler for authjwt
# in production, you can tweak performance using orjson response
@app.exception_handler(AuthJWTException)
def authjwt_exception_handler(request: Request, exc: AuthJWTException):
    print(exc.status_code)
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message}
    )

# provide a method to create access tokens. The create_access_token()
# function is used to actually generate the token to use authorization
# later in endpoint protected
@app.post('/login')
def login(user: schemas.userbase,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    current_user = crud.get_user(userdata=user,db=db)
    if not current_user:
        raise HTTPException(status_code=401,detail="Bad username or password")
    access_token = Authorize.create_access_token(subject=user.hrms)
    return {"accessToken": access_token,'hrms':current_user.hrms,'role':current_user.role}


@app.post("/heirarchy/")
def create_heirarchy(heirarchi:schemas.heirarchyCreate, db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.create_heirarchy(db=db, heirarchi=heirarchi)

@app.get("/annexure1/{id}/")
def get_annexure1(id:str,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_annexure1(db=db,id=id)

@app.get("/heirarchy/inprogress/{hrms}")
def get_heirarchy(hrms: str, db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_inprogress(db=db, hrms=hrms)

@app.get("/heirarchy/completed/{hrms}")
def get_heirarchy(hrms: str, db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_completed(db=db, hrms=hrms)

@app.get("/heirarchy/{hrms}")
def get_heirarchy(hrms: str, db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_heirarchy(db=db, hrms=hrms)

@app.post("/annexure1/")
def create_annexure1(annexure1: schemas.annexure1Create,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.add_annexure1(db=db,annexure1=annexure1)
    

@app.delete('/heirarchy/{id}/')
def delete_heirarchy(id: int, db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.delete_heirarchy(db=db, id=id)

@app.get("/profileData/")
def getuserdata(hrms:str,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_userdata(db=db,hrms=hrms)

@app.get("/searchname/")
def searchName(Sname:str, db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    Sname = Sname+'%'
    return crud.searchName(db=db,Sname=Sname)

@app.get("/inboxdata/")
def inboxdata(id:str, db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.inboxData(db=db,id=id)

@app.post("/annexure2/")
def create_annexure2(data:List=Body(),db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    datar=tuple(sub[k] for k in ['reportingOfficer1','reportingOfficer2'] for sub in data if k in sub)
    datar=(data[-1]['annexure2_id'],data[-1]['agree1'],data[-1]['agree2'])+datar
    datar=datar+(data[-1]['comment1'],data[-1]['comment2'],data[-1]['integrity1'] ,data[-1]['integrity2'])
    return crud.create_annexure2(db=db,data=datar)

@app.get("/annexure2/{id}")
def get_annexure2(id:str,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_Annexure2(db=db,id=id)


@app.post("/annexure3/")
def create_annexure3(Annexure3: schemas.createannexure3,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.create_annexure3(db=db,annexure3=Annexure3)

@app.get("/annexure3/{id}")
def get_annexure2(id:str,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_Annexure3(db=db,id=id)

@app.post("/annexure4/")
def create_annexure4(Annexure4: schemas.createannexure4,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.create_annexure4(db=db,annexure4=Annexure4)
@app.get("/annexure4/{id}")
def get_annexure4(id:str,db: Session = Depends(get_db),Authorize: AuthJWT = Depends()):
    Authorize.jwt_required()
    return crud.get_annexure4(db=db,id=id)
app.mount('/',StaticFiles(directory='dist',html=True))



