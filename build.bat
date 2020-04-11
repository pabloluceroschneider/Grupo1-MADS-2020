call cd client
IF NOT EXIST node_modules (
    call npm i
)

cd ../server 
IF NOT EXIST venv( call py -3 -m venv venv  && call venv\Scripts\activate  && call pip install Flask)
    
cd api/v1/
start cmd /C python app.py

cd ../../../
call code .

cd client
call npm start