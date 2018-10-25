import requests

PROTOCOL = 'http://'
IP_HOST = 'localhost'
PORT = '5000'

base_url = PROTOCOL + IP_HOST + ':' + PORT 

res = requests.get(base_url)

print (res.json()) 