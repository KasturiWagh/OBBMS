Prerequisites
- Text editor (Visual Studio Code)
- Python3
- Flask module

Steps to run the code ::
1.Install Text editor
2.Install the Python extension
3.Install a version of python 3
        On Windows, make sure the location of your Python interpreter is included in your PATH environment variable. 
    You can check the location by running path at the command prompt. If the Python interpreter's folder isn't included, 
    open Windows Settings, search for "environment", select Edit environment variables for your account, then edit the Path variable to include that folder.
4.Create a Project enviroment for the flask 
    # Windows and Visual Studio Code
    Open a new terminal , Install virtualenv by "pip install virtualenv"
    for setting up the enviroment type "virtualenv env"
    This will create an envirment for env
5.Set Execution policy to Unrestricted : To set policy as Unrestricted type "Set-ExecutionPolicy Unrestricted" in terminal
6.Arrange the folders as 
    - static
        |_ css
            |_ ( .css files)
        |_ js
            |_ ( .js files)
        |_ (all .jpg and .png files)
    - template
        |_ (all html files)
    - app.py
    - info.db
    - ReadMe.txt
7.To execute the code type ".\env\Scripts\activate.ps1" in terminal
after that Type "python .\app.py "
8.CLick on the "http://127.0.0.1:8000/" 
    
