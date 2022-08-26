# -*- coding: utf-8 -*-
"""
Created on Fri Aug 26 07:26:08 2022

@author: HP
"""

import requests

url = 'http://localhost:5000/predict_api'
r = requests.post(url,json={'experience':2, 'test_score':9, 'interview_score':6})

print(r.json())