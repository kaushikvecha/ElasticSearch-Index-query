
##########################
# Reading json data back #
##########################
import json

with open('jsondata.json', 'r') as f:
     rows = json.load(f)
        

############################
# elastic connection setup #
############################


# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#  make sure ES is up and running
# >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import requests
res = requests.get('http://localhost:9200')
#print(res.content)


#connect to our cluster
from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])


###################################
# indexing through collected jobs #
###################################

import json
r = requests.get('http://localhost:9200') 
i = 1
for elm in rows:
    
    es.index(index='indeed-jobs', doc_type='jobs', id=i, body=json.loads(json.dumps(elm)))
    i=i+1
 

print("DATA IS INDEXED")
