call cd client
IF NOT EXIST node_modules (
    call npm i
)

cd ../server 
IF NOT EXIST venv( call py -3 -m venv venv  && call venv\Scripts\activate  && call pip install Flask )
    
cd api/v1/
start cmd /K python app.py

cd ../../../client
start cmd /K npm start

call code .