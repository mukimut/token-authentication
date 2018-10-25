from flask import Flask, request, jsonify
import json
import os
import requests
import sys
import time

app = Flask(__name__)


@app.route('/', methods=['GET'])
def mainRoute():
    return "{} ", 200


@app.route('/devices', methods=['GET'])
def somename():
    param = request.args.get("param")
    # will provide a list of current
    return "{}", 200


@app.route('/api/authenticate', methods=['POST'])
def somename2():
    ##
    print (data)
    return "{}", 200
    
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3600)
