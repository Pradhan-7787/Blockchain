**Activate the virtual environment**

'''
source blockchain-env/bin/activate
'''

**Install all packages**

'''
pip3 install -r requirements.txt
'''

**Run the test**

make sure to activate the virtual environment.

'''
python3 -m pytest backend/tests
'''

**Run the application & API**

make sure to activate the virtual environment.

'''
python3 -m backend.app
'''

**Run a PEER instance**

make sure to activate virtual environment

'''
export PEER=True && python3 -m backend.app
'''